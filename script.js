const featuredProjects = [
  {
    title: "Qualital Nexus",
    category: "PLATAFORMA CORPORATIVA",
    description: "Plataforma corporativa para centralização de ferramentas e automação da extração de informações de documentos técnicos.",
    detail: "PDF, DOC e DOCX viram XLSX/CSV com parser, LLMs e fallback determinístico. API protegida e processamento em VPS; frontend na Vercel.",
    status: "Em produção",
    stack: ["Next.js", "TypeScript", "FastAPI", "Supabase", "PostgreSQL", "OpenRouter", "Docker", "VPS"],
    liveUrl: "https://qualital.cloud",
    githubUrl: "https://github.com/Ivamaroque/Qualital-Nexus",
    variant: "primary"
  },
  {
    title: "DiogoStore",
    category: "GESTÃO DE ENCOMENDAS",
    description: "Sistema de gestão de encomendas que substituiu um processo antes realizado manualmente em caderno.",
    detail: "Reúne clientes, pedidos, pagamentos e rastreamentos em uma operação mobile com dashboard, perfis de acesso, Supabase Auth, RLS e mensagens para WhatsApp.",
    status: "Em produção",
    stack: ["Next.js", "JavaScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Vercel"],
    liveUrl: "https://diogo-store.vercel.app/",
    githubUrl: "https://github.com/Ivamaroque/DiogoStore"
  },
  {
    title: "ConSec",
    category: "SISTEMA DE CONTROLE FINANCEIRO",
    description: "Sistema de gestão financeira desenvolvido para uma Secretaria Municipal de Educação.",
    detail: "Controle de custos, categorização de despesas, usuários e permissões, dashboard e validação com dados de 18 centros de custo, com atenção à acessibilidade WCAG.",
    stack: ["Angular", "TypeScript", ".NET", "C#", "Entity Framework", "REST API", "SQL"],
    githubUrl: "https://github.com/Ivamaroque/ConSec",
    figmaUrl: "https://embed.figma.com/design/XLwCFb6lypbWzg91DeNqjp/Projetos?node-id=0-1&embed-host=share",
    variant: "consec"
  }
];

const featuredContainer = document.querySelector("#featured-projects");
const otherContainer = document.querySelector("#other-projects");
const externalAttributes = 'target="_blank" rel="noopener noreferrer"';

// Dados acima são editoriais. O GitHub só complementa a seção de projetos menores.
featuredContainer.innerHTML = featuredProjects.map((project, index) => {
  const tags = project.stack.map((item) => `<span>${item}</span>`).join("");
  const liveLink = project.liveUrl
    ? `<a class="button button-primary" href="${project.liveUrl}" ${externalAttributes}>Ver projeto <span aria-hidden="true">↗</span></a>`
    : "";
  return `
    <article class="featured-card ${project.variant ? `featured-card-${project.variant}` : ""}" aria-labelledby="project-${index}">
      <div class="project-topline">
        ${project.status ? `<span class="status">${project.status}</span>` : "<span></span>"}
        <span class="project-index">0${index + 1} / 03</span>
      </div>
      <div class="project-body">
        <p class="project-category">${project.category}</p>
        <h3 id="project-${index}">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <p class="project-detail">${project.detail}</p>
      </div>
      <div class="project-bottom">
        <div class="project-tags" aria-label="Tecnologias utilizadas">${tags}</div>
        <div class="project-actions">
          ${liveLink}
          <a class="button button-secondary" href="${project.githubUrl}" ${externalAttributes}>GitHub <span aria-hidden="true">↗</span></a>
          ${project.figmaUrl ? `<a class="text-link" href="${project.figmaUrl}" ${externalAttributes}>Protótipo Figma ↗</a>` : ""}
        </div>
      </div>
    </article>`;
}).join("");

const preferredRepos = [
  "Optimization",
  "ConFamily",
  "Portifolio-Rubia",
  "RazorCrudACT",
  "RazorProject",
  "ConIA"
];

function createOtherCard({ title, description, language, url, linkLabel = "Código ↗" }) {
  const article = document.createElement("article");
  article.className = "other-card";
  const header = document.createElement("div");
  header.className = "other-card-header";
  const heading = document.createElement("h3");
  heading.textContent = title;
  const arrow = document.createElement("span");
  arrow.className = "other-card-arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  header.append(heading, arrow);
  article.append(header);
  if (description) {
    const paragraph = document.createElement("p");
    paragraph.textContent = description;
    article.append(paragraph);
  }
  const footer = document.createElement("div");
  footer.className = "other-card-footer";
  const meta = document.createElement("span");
  meta.textContent = language || "";
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = linkLabel;
  link.setAttribute("aria-label", `${linkLabel.replace(" ↗", "")} de ${title} (abre em nova aba)`);
  footer.append(meta, link);
  article.append(footer);
  return article;
}

async function loadOtherProjects() {
  try {
    const response = await fetch("https://api.github.com/users/Ivamaroque/repos?per_page=100", {
      headers: { Accept: "application/vnd.github+json" }
    });
    if (!response.ok) throw new Error(`GitHub API: ${response.status}`);
    const repos = await response.json();
    if (!Array.isArray(repos)) throw new Error("Resposta inesperada da API do GitHub");
    const selected = preferredRepos
      .map((name) => repos.find((repo) => repo.name.toLowerCase() === name.toLowerCase() && !repo.fork))
      .filter(Boolean);
    otherContainer.replaceChildren(...selected.map((repo) => createOtherCard({
      title: repo.name === "Portifolio-Rubia" ? "Portfólio Rubia" : repo.name,
      description: repo.description,
      language: repo.language,
      url: repo.html_url
    })));
    if (!selected.length) throw new Error("Nenhum repositório selecionado encontrado");
  } catch (error) {
    otherContainer.replaceChildren();
    const message = document.createElement("p");
    message.className = "loading-message";
    message.textContent = "Os projetos do GitHub estão indisponíveis no momento.";
    const link = document.createElement("a");
    link.href = "https://github.com/Ivamaroque?tab=repositories";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Ver repositórios no GitHub ↗";
    message.append(" ", link);
    otherContainer.append(message);
    console.warn("Não foi possível carregar os projetos secundários:", error);
  }
}

loadOtherProjects();
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelectorAll(".mobile-nav-panel a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".mobile-nav").open = false;
  });
});

if (window.IntersectionObserver && window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
  const revealItems = document.querySelectorAll(
    ".section-heading, .featured-card, .other-grid, .stack-group, .experience-layout, .about-section, .contact-inner"
  );
  revealItems.forEach((item) => item.classList.add("reveal"));
  document.body.classList.add("motion-ready");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px 40px 0px" });
  revealItems.forEach((item) => observer.observe(item));
}
