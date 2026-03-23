// ===========================
// Configuration
// ===========================
const CONFIG = {
  github: {
    username: 'Ivamaroque',
    apiBase: 'https://api.github.com',
    reposPerPage: 12,
  },
  linkedin: {
    url: 'https://linkedin.com/in/ivamaroque',
  },
};

// ===========================
// Typed Text Animation
// ===========================
const typedStrings = [
  'Desenvolvedor de Software',
  'Estudante de TI',
  'Apaixonado por Tecnologia',
  'Criador de Soluções',
];

let typedIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const el = document.getElementById('typed');
  if (!el) return;

  const current = typedStrings[typedIndex];
  if (isDeleting) {
    el.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    el.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === current.length) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typedIndex = (typedIndex + 1) % typedStrings.length;
    delay = 400;
  }

  setTimeout(typeEffect, delay);
}

// ===========================
// Particles Background
// ===========================
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const count = Math.min(30, Math.floor(window.innerWidth / 50));

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 15 + 10}s;
      animation-delay: ${Math.random() * 10}s;
      opacity: ${Math.random() * 0.5 + 0.1};
    `;
    container.appendChild(p);
  }
}

// ===========================
// Navigation
// ===========================
function initNav() {
  const nav = document.querySelector('nav');
  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('.nav-links');
  const navAnchors = document.querySelectorAll('.nav-links a');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    updateActiveLink();
  }, { passive: true });

  // Mobile toggle
  if (toggle) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      const spans = toggle.querySelectorAll('span');
      if (links.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans.forEach(s => (s.style.transform = s.style.opacity = ''));
      }
    });
  }

  // Close on link click (mobile)
  navAnchors.forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      const spans = toggle ? toggle.querySelectorAll('span') : [];
      spans.forEach(s => (s.style.transform = s.style.opacity = ''));
    });
  });

  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) {
        current = sec.id;
      }
    });

    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }
}

// ===========================
// Intersection Observer (reveal)
// ===========================
function initReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===========================
// GitHub Language Colors
// ===========================
const LANG_COLORS = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python: '#3572a5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'C++': '#f34b7d',
  C: '#555555',
  Go: '#00add8',
  Rust: '#dea584',
  PHP: '#4f5d95',
  Ruby: '#701516',
  Swift: '#f05138',
  Kotlin: '#7f52ff',
  Dart: '#00b4ab',
  Shell: '#89e051',
};

function getLangColor(lang) {
  return LANG_COLORS[lang] || '#aaaaaa';
}

function getProjectIcon(lang) {
  const icons = {
    JavaScript: '🟨',
    TypeScript: '🔷',
    Python: '🐍',
    Java: '☕',
    HTML: '🌐',
    CSS: '🎨',
    'C++': '⚙️',
    C: '🔧',
    Go: '🐹',
    Rust: '🦀',
    PHP: '🐘',
    Ruby: '💎',
    Swift: '🍎',
    Kotlin: '🎯',
    Dart: '🎯',
    Shell: '🖥️',
  };
  return icons[lang] || '📦';
}

// ===========================
// GitHub Projects
// ===========================
let allRepos = [];
let visibleCount = CONFIG.github.reposPerPage;
let activeFilter = 'all';

async function fetchGitHubRepos() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  try {
    const response = await fetch(
      `${CONFIG.github.apiBase}/users/${CONFIG.github.username}/repos?per_page=100&sort=updated&type=public`
    );

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const repos = await response.json();
    allRepos = repos
      .filter(r => !r.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at));

    updateStats(repos);
    renderProjects();
    renderFilterButtons();
  } catch (err) {
    grid.innerHTML = `
      <div class="projects-empty">
        <div style="font-size:2rem;margin-bottom:1rem;">😔</div>
        <p>Não foi possível carregar os projetos. Veja diretamente no <a href="https://github.com/${CONFIG.github.username}" target="_blank" rel="noopener" style="color:var(--primary)">GitHub</a>.</p>
      </div>
    `;
  }
}

function updateStats(repos) {
  const repoCount = document.getElementById('repoCount');
  if (repoCount) repoCount.textContent = repos.length;

  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
  const starsEl = document.getElementById('starsCount');
  if (starsEl) starsEl.textContent = totalStars;
}

function renderFilterButtons() {
  const container = document.getElementById('filterButtons');
  if (!container) return;

  const langs = ['all', ...new Set(allRepos.map(r => r.language).filter(Boolean))].slice(0, 8);

  container.innerHTML = langs
    .map(
      lang => `
      <button class="filter-btn ${lang === 'all' ? 'active' : ''}" data-lang="${lang}">
        ${lang === 'all' ? '🗂️ Todos' : lang}
      </button>
    `
    )
    .join('');

  container.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.lang;
      visibleCount = CONFIG.github.reposPerPage;
      renderProjects();
    });
  });
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  const showMoreBtn = document.getElementById('showMoreBtn');
  if (!grid) return;

  const filtered =
    activeFilter === 'all'
      ? allRepos
      : allRepos.filter(r => r.language === activeFilter);

  const visible = filtered.slice(0, visibleCount);

  if (visible.length === 0) {
    grid.innerHTML = `
      <div class="projects-empty">
        <div style="font-size:2rem;margin-bottom:1rem;">📭</div>
        <p>Nenhum projeto encontrado com esta linguagem.</p>
      </div>
    `;
    if (showMoreBtn) showMoreBtn.style.display = 'none';
    return;
  }

  grid.innerHTML = visible
    .map((repo, i) => createProjectCard(repo, i))
    .join('');

  // Trigger animation with stagger
  grid.querySelectorAll('.project-card').forEach((card, i) => {
    setTimeout(() => {
      card.style.animationDelay = `${i * 0.05}s`;
      card.style.animationPlayState = 'running';
    }, 10);
  });

  if (showMoreBtn) {
    if (filtered.length > visibleCount) {
      showMoreBtn.style.display = 'inline-flex';
      showMoreBtn.textContent = `Ver mais (${filtered.length - visibleCount} restantes)`;
    } else {
      showMoreBtn.style.display = 'none';
    }
  }
}

function createProjectCard(repo, index) {
  const lang = repo.language || 'N/A';
  const color = getLangColor(repo.language);
  const icon = getProjectIcon(repo.language);
  const desc = repo.description || 'Sem descrição disponível.';
  const updatedAt = new Date(repo.updated_at).toLocaleDateString('pt-BR');

  return `
    <a class="project-card" href="${repo.html_url}" target="_blank" rel="noopener"
       style="animation-play-state: paused;">
      <div class="project-card-header">
        <span class="project-icon">${icon}</span>
        <div class="project-links">
          <span class="project-link-btn" title="Ver no GitHub">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </span>
          ${repo.homepage ? `<a class="project-link-btn" href="${repo.homepage}" target="_blank" rel="noopener" title="Ver demo" onclick="event.stopPropagation()">🔗</a>` : ''}
        </div>
      </div>

      <div class="project-name">${repo.name.replace(/-/g, ' ')}</div>
      <p class="project-description">${desc}</p>

      <div class="project-footer">
        <div class="project-lang">
          <span class="lang-dot" style="background:${color}"></span>
          ${lang}
        </div>
        <div class="project-stats">
          <span class="project-stat">
            ⭐ ${repo.stargazers_count}
          </span>
          <span class="project-stat">
            🍴 ${repo.forks_count}
          </span>
        </div>
      </div>
    </a>
  `;
}

// ===========================
// Contact Form
// ===========================
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    const submitBtn = form.querySelector('.form-submit');

    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    // Simulate form submission — replace the fetch below with a real form service endpoint
    // (e.g., Formspree: https://formspree.io) for actual email delivery.
    setTimeout(() => {
      status.textContent = '✅ Mensagem enviada! Entrarei em contato em breve pelo LinkedIn.';
      status.className = 'form-status success';
      form.reset();
      submitBtn.textContent = 'Enviar Mensagem';
      submitBtn.disabled = false;

      setTimeout(() => {
        status.textContent = '';
      }, 5000);
    }, 1200);
  });
}

// ===========================
// Show More Projects
// ===========================
function initShowMore() {
  const btn = document.getElementById('showMoreBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    visibleCount += CONFIG.github.reposPerPage;
    renderProjects();
    btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

// ===========================
// Smooth Scroll (fallback)
// ===========================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ===========================
// Year Update in Footer
// ===========================
function updateYear() {
  const el = document.getElementById('currentYear');
  if (el) el.textContent = new Date().getFullYear();
}

// ===========================
// Init
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  typeEffect();
  initNav();
  initReveal();
  initContactForm();
  initShowMore();
  initSmoothScroll();
  updateYear();
  fetchGitHubRepos();
});
