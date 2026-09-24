import { spawn } from "node:child_process";
import { rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const chrome = process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe";
const widths = [320, 375, 430, 768, 1024, 1280, 1440, 1920];
const profile = join(tmpdir(), `portfolio-check-${process.pid}`);
const port = 20000 + (process.pid % 20000);
const browser = spawn(chrome, [
  "--headless=new", "--disable-gpu", "--no-first-run", "--no-default-browser-check",
  `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, "about:blank"
], { stdio: "ignore" });

const pause = (ms) => new Promise((done) => setTimeout(done, ms));
let socket;
let nextId = 0;
const pending = new Map();
const failures = [];

try {
  let tabs;
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      tabs = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
      if (tabs.find((tab) => tab.type === "page")?.webSocketDebuggerUrl) break;
    } catch {}
    await pause(250);
  }
  const tab = tabs?.find((item) => item.type === "page");
  if (!tab?.webSocketDebuggerUrl) throw new Error("Chrome não iniciou para validação");
  socket = new WebSocket(tab.webSocketDebuggerUrl);
  await new Promise((done, reject) => {
    socket.addEventListener("open", done, { once: true });
    socket.addEventListener("error", reject, { once: true });
  });
  socket.addEventListener("message", ({ data }) => {
    const message = JSON.parse(data);
    if (message.id && pending.has(message.id)) {
      const { resolve: done, reject } = pending.get(message.id);
      pending.delete(message.id);
      message.error ? reject(new Error(message.error.message)) : done(message.result);
    }
    if (message.method === "Runtime.exceptionThrown") {
      failures.push(message.params.exceptionDetails.text);
    }
  });
  const send = (method, params = {}) => new Promise((done, reject) => {
    const id = ++nextId;
    pending.set(id, { resolve: done, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
  await send("Page.enable");
  await send("Runtime.enable");
  for (const width of widths) {
    await send("Emulation.setDeviceMetricsOverride", { width, height: 900, deviceScaleFactor: 1, mobile: width < 768 });
    await send("Page.navigate", { url: pathToFileURL(resolve("index.html")).href });
    let ready = false;
    for (let attempt = 0; attempt < 80; attempt += 1) {
      const state = await send("Runtime.evaluate", {
        expression: "location.protocol === 'file:' && document.readyState === 'complete' && document.querySelectorAll('.featured-card').length === 3",
        returnByValue: true
      });
      ready = state.result.value;
      if (ready) break;
      await pause(250);
    }
    if (!ready) {
      const state = await send("Runtime.evaluate", { expression: "JSON.stringify({url:location.href,ready:document.readyState,body:document.body?.textContent?.slice(0,120)})", returnByValue: true });
      throw new Error(`Página não carregou em ${width}px: ${state.result.value}`);
    }
    await pause(500);
    const { result } = await send("Runtime.evaluate", {
      expression: `(() => {
        const cards = [...document.querySelectorAll(".featured-card")];
        return {
          viewport: innerWidth,
          scrollWidth: document.documentElement.scrollWidth,
          cardCount: cards.length,
          escaped: cards.some(card => [...card.querySelectorAll(".project-body,.project-bottom,.project-actions")]
            .some(item => item.getBoundingClientRect().right > card.getBoundingClientRect().right + 2 ||
              item.getBoundingClientRect().bottom > card.getBoundingClientRect().bottom + 2)),
          portraitLoaded: document.querySelector(".hero-photo").naturalWidth > 0,
          aligned: ${width} < 768 || Math.abs(cards[0].getBoundingClientRect().height - cards[1].getBoundingClientRect().height) < 2,
          externalLinksSafe: [...document.querySelectorAll('a[target="_blank"]')]
            .every(link => link.relList.contains("noopener") && link.relList.contains("noreferrer")),
          liveLinks: [...document.querySelectorAll(".featured-card .button-primary")].map(link => link.href),
          otherCards: document.querySelectorAll(".other-card").length
        };
      })()`,
      returnByValue: true
    });
    const data = result.value;
    console.log(`${width}px:`, JSON.stringify(data));
    if (data.scrollWidth > data.viewport || data.cardCount !== 3 || data.escaped ||
      !data.portraitLoaded || !data.aligned || !data.externalLinksSafe ||
      !data.liveLinks.includes("https://qualital.cloud/") ||
      !data.liveLinks.includes("https://diogo-store.vercel.app/")) {
      failures.push(`Layout ou links inválidos em ${width}px`);
    }
  }
  if (failures.length) throw new Error(failures.join("; "));
  console.log("Validação visual e estrutural concluída sem falhas.");
} finally {
  socket?.close();
  browser.kill();
  await pause(250);
  await rm(profile, { recursive: true, force: true, maxRetries: 3 });
}
