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
  defaultLanguage: 'pt',
};

const I18N = {
  en: {
    htmlLang: 'en',
    title: 'Ivamaroque | Portfolio',
    description: 'Personal portfolio of Ivamaroque, a software developer passionate about technology, with GitHub projects and development experience.',
    ogTitle: 'Ivamaroque | Portfolio',
    ogDescription: 'Personal portfolio with GitHub projects and professional information.',
    nav: {
      main: 'Main navigation',
      home: 'Home',
      openMenu: 'Open menu',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      badge: 'Available for opportunities',
      greeting: "Hello, world! 👋 I'm",
      description:
        'Passionate about technology and software development. I turn ideas into code, building solutions that make a difference. Always learning, always growing. 🚀',
      primaryCta: 'View Projects',
      secondaryCta: '✉️ Get in Touch',
      scroll: 'Scroll',
    },
    about: {
      badge: 'About Me',
      titleMain: 'Who am',
      titleAccent: 'I?',
      subtitle: 'Learn more about my journey and what drives me in technology',
      repositories: 'Repositories',
      stars: 'Stars',
      text1:
        'I am a software developer passionate about creating innovative and functional solutions. My journey in technology started with curiosity about how things work behind the scenes, and since then I have never stopped learning and growing.',
      text2:
        'I believe in the power of code to turn ideas into reality. I work with different technologies and always aim to stay up to date with industry best practices. I enjoy collaborating with teams and contributing to projects that create real impact.',
      location: 'Location',
      status: 'Status',
      education: 'Education',
      locationValue: 'Brazil',
      statusValue: 'Available',
      educationValue: 'Computer Engineering',
      viewGithub: 'View GitHub',
      viewLinkedIn: 'View LinkedIn',
    },
    skills: {
      badge: 'Skills',
      titleMain: 'What can',
      titleAccent: 'I do?',
      subtitle: 'Technologies and tools I use every day to build great solutions',
      languages: 'Languages',
      frameworks: 'Frameworks & Libraries',
      databases: 'Databases',
      tools: 'Tools & DevOps',
    },
    projects: {
      badge: 'Projects',
      titleMain: 'My',
      titleAccent: 'Projects',
      subtitle: 'Browse my public GitHub repositories — each project is a learning story',
      filterLabel: 'Filter by language',
      all: 'All',
      loading: 'Loading GitHub projects...',
      emptyFiltered: 'No project found with this language.',
      emptyError: 'Sorry, we could not load the projects. Visit my <a href="https://github.com/Ivamaroque" target="_blank" rel="noopener" style="color:var(--primary)">GitHub</a> directly.',
      showMore: count => `Show more (${count} left)`,
      noDescription: 'No description available.',
      viewGitHub: 'View on GitHub',
      viewDemo: 'View demo',
    },
    uiux: {
      badge: 'UI/UX',
      titleMain: 'Interface',
      titleAccent: 'Design',
      subtitle:
        'I also work with UI/UX, creating flows, prototypes, and interfaces focused on clarity, visual consistency, and a strong user experience.',
      focusTitle: 'Focus on Experience',
      focusText: 'I structure journeys and components to make tasks simpler, more intuitive, and accessible.',
      prototypeTitle: 'Figma Prototypes',
      prototypeText: 'I build wireframes and clickable prototypes to validate ideas before implementation.',
      consistencyTitle: 'Visual Consistency',
      consistencyText: 'I organize typographic hierarchy, colors, and interaction patterns to strengthen product identity.',
      cta: 'View UI/UX Project in Figma',
      ctaLabel: 'Open UI/UX project in Figma',
    },
    experience: {
      badge: 'Experience',
      titleMain: 'My',
      titleAccent: 'Journey',
      subtitle: 'Academic background and professional experiences that shaped my path',
      items: [
        {
          date: '2024 — Present',
          title: 'Full Stack Developer',
          company: 'MPRN (IT Residency)',
          desc: 'Building systems with Angular and .NET, leading technical teams, and collaborating on UI/UX and accessibility for products with institutional impact.',
        },
        {
          date: '2025',
          title: 'Development Intern (QA)',
          company: 'MAPIA',
          desc: 'Worked on software quality and delivery validation, collaborating with the development team to improve reliability and technical standards.',
        },
        {
          date: '2024 — 2025',
          title: 'Full Stack Capstone Project',
          company: 'UFRN',
          desc: 'End-to-end project ownership: functional and non-functional requirements, screen prototyping, data modeling, architecture, and clean code practices.',
        },
        {
          date: '2023 — 2025',
          title: "Bachelor's Degree in Computer Engineering",
          company: 'UFRN',
          desc: 'Focused on software engineering and solution development, combining academic theory with practical execution in real projects.',
        },
        {
          date: '2018 — 2022',
          title: "Bachelor's Degree in Science and Technology",
          company: 'UFRN',
          desc: 'Interdisciplinary training with emphasis on math, computing, and engineering, strengthening analytical thinking and systems perspective for software projects.',
        },
        {
          date: '2014 — 2017',
          title: 'Technical Degree in IT',
          company: 'IFPB',
          desc: 'Technical training focused on logic, programming, and systems fundamentals, building the foundation for a career in software development.',
        },
      ],
    },
    contact: {
      badge: 'Contact',
      titleMain: "Let's",
      titleAccent: 'talk?',
      subtitle: "I'm available for projects, collaborations, and new opportunities. Get in touch!",
      text: 'Whether it\'s a job opportunity, a project collaboration, or just a conversation about technology, I\'m happy to hear from you. I\'ll reply as soon as possible! 😊',
      directMessage: 'Direct Message',
      directMessageText: 'Send a message on LinkedIn',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      subjectPlaceholder: 'How can I help?',
      messagePlaceholder: 'Write your message here...',
      submit: '✉️ Send Message',
      sending: 'Sending...',
      success: '✅ Message sent! I will get back to you soon on LinkedIn.',
    },
    footer: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      copy: 'Made with',
      love: 'love',
      tail: 'and lots of coffee ☕',
    },
    form: {
      successTimeout: 5000,
    },
  },
  pt: {
    htmlLang: 'pt-BR',
    title: 'Ivamaroque | Portfólio',
    description: 'Portfólio pessoal de Ivamaroque — Desenvolvedor de Software apaixonado por tecnologia, com projetos no GitHub e experiência em desenvolvimento.',
    ogTitle: 'Ivamaroque | Portfólio',
    ogDescription: 'Portfólio pessoal com projetos no GitHub e informações profissionais.',
    nav: {
      main: 'Navegação principal',
      home: 'Início',
      openMenu: 'Abrir menu',
      about: 'Sobre',
      skills: 'Habilidades',
      projects: 'Projetos',
      experience: 'Experiência',
      contact: 'Contato',
    },
    hero: {
      badge: 'Disponível para oportunidades',
      greeting: 'Olá, mundo! 👋 Eu sou',
      description:
        'Apaixonado por tecnologia e desenvolvimento de software. Transformo ideias em código, construindo soluções que fazem a diferença. Sempre aprendendo, sempre evoluindo. 🚀',
      primaryCta: 'Ver Projetos',
      secondaryCta: '✉️ Entre em Contato',
      scroll: 'Rolar',
    },
    about: {
      badge: 'Sobre Mim',
      titleMain: 'Quem sou',
      titleAccent: 'eu?',
      subtitle: 'Conheça um pouco mais sobre minha jornada e paixões na tecnologia',
      repositories: 'Repositórios',
      stars: 'Stars',
      text1:
        'Sou um desenvolvedor de software apaixonado por criar soluções inovadoras e funcionais. Minha jornada na tecnologia começou com a curiosidade sobre como as coisas funcionam por baixo dos panos, e desde então não parei de aprender e crescer.',
      text2:
        'Acredito no poder do código para transformar ideias em realidade. Trabalho com diversas tecnologias e estou sempre buscando me atualizar com as melhores práticas do mercado. Adoro colaborar com equipes e contribuir para projetos que geram impacto real.',
      location: 'Localização',
      status: 'Status',
      education: 'Formação',
      locationValue: 'Brasil',
      statusValue: 'Disponível',
      educationValue: 'Engenheiro de Computação',
      viewGithub: 'Ver GitHub',
      viewLinkedIn: 'Ver LinkedIn',
    },
    skills: {
      badge: 'Habilidades',
      titleMain: 'O que eu',
      titleAccent: 'sei fazer?',
      subtitle: 'Tecnologias e ferramentas que utilizo no dia a dia para construir soluções incríveis',
      languages: 'Linguagens',
      frameworks: 'Frameworks & Bibliotecas',
      databases: 'Banco de Dados',
      tools: 'Ferramentas & DevOps',
    },
    projects: {
      badge: 'Projetos',
      titleMain: 'Meus',
      titleAccent: 'Projetos',
      subtitle: 'Confira os repositórios públicos do meu GitHub — cada projeto é uma história de aprendizado',
      filterLabel: 'Filtrar por linguagem',
      all: 'Todos',
      loading: 'Carregando projetos do GitHub...',
      emptyFiltered: 'Nenhum projeto encontrado com esta linguagem.',
      emptyError: 'Não foi possível carregar os projetos. Veja diretamente no <a href="https://github.com/Ivamaroque" target="_blank" rel="noopener" style="color:var(--primary)">GitHub</a>.',
      showMore: count => `Ver mais (${count} restantes)`,
      noDescription: 'Sem descrição disponível.',
      viewGitHub: 'Ver no GitHub',
      viewDemo: 'Ver demo',
    },
    uiux: {
      badge: 'UI/UX',
      titleMain: 'Design de',
      titleAccent: 'Interfaces',
      subtitle:
        'Também atuo em UI/UX, criando fluxos, protótipos e interfaces focadas em clareza, consistência visual e boa experiência de uso.',
      focusTitle: 'Foco na Experiência',
      focusText: 'Estruturo jornadas e componentes para tornar tarefas mais simples, intuitivas e acessíveis.',
      prototypeTitle: 'Protótipos no Figma',
      prototypeText: 'Desenvolvo wireframes e protótipos navegáveis para validar ideias antes da implementação.',
      consistencyTitle: 'Consistência Visual',
      consistencyText: 'Organizo hierarquia tipográfica, cores e padrões de interação para fortalecer a identidade do produto.',
      cta: 'Ver Projeto UI/UX no Figma',
      ctaLabel: 'Abrir projeto de UI/UX no Figma',
    },
    experience: {
      badge: 'Experiência',
      titleMain: 'Minha',
      titleAccent: 'Jornada',
      subtitle: 'Formação acadêmica e experiências profissionais que moldaram minha trajetória',
      items: [
        {
          date: '2024 — Presente',
          title: 'Desenvolvedor Full Stack',
          company: 'MPRN (Residência em TI)',
          desc: 'Desenvolvimento de sistemas com Angular e .NET, liderança técnica de equipes e colaboração com UI/UX e acessibilidade em produtos de impacto institucional.',
        },
        {
          date: '2025',
          title: 'Estagiário de Desenvolvimento (QA)',
          company: 'MAPIA',
          desc: 'Atuação em qualidade de software e validação de entregas, colaborando com o time de desenvolvimento para elevar confiabilidade e padrão técnico.',
        },
        {
          date: '2024 — 2025',
          title: 'Projeto de TCC Full Stack',
          company: 'UFRN',
          desc: 'Condução ponta a ponta do projeto: requisitos funcionais e não funcionais, prototipação de telas, modelagem de dados, arquitetura e práticas de clean code.',
        },
        {
          date: '2023 — 2025',
          title: 'Bacharelado em Engenharia da Computação',
          company: 'UFRN',
          desc: 'Especialização em engenharia de software e desenvolvimento de soluções, integrando teoria acadêmica com execução prática em projetos reais.',
        },
        {
          date: '2018 — 2022',
          title: 'Bacharelado em Ciência e Tecnologia',
          company: 'UFRN',
          desc: 'Formação interdisciplinar com ênfase em matemática, computação e engenharia, fortalecendo raciocínio analítico e visão sistêmica para projetos de software.',
        },
        {
          date: '2014 — 2017',
          title: 'Técnico em Informática',
          company: 'IFPB',
          desc: 'Formação técnica com foco em lógica, programação e fundamentos de sistemas, consolidando a base para a carreira em desenvolvimento de software.',
        },
      ],
    },
    contact: {
      badge: 'Contato',
      titleMain: 'Vamos',
      titleAccent: 'conversar?',
      subtitle: 'Estou disponível para projetos, colaborações e novas oportunidades. Entre em contato!',
      text: 'Seja para uma oportunidade de trabalho, colaboração em projeto ou apenas um papo sobre tecnologia, fico feliz em ouvir. Responderei o mais rápido possível! 😊',
      directMessage: 'Mensagem Direta',
      directMessageText: 'Enviar mensagem via LinkedIn',
      name: 'Nome',
      email: 'Email',
      subject: 'Assunto',
      message: 'Mensagem',
      namePlaceholder: 'Seu nome',
      emailPlaceholder: 'seu@email.com',
      subjectPlaceholder: 'Como posso ajudar?',
      messagePlaceholder: 'Escreva sua mensagem aqui...',
      submit: '✉️ Enviar Mensagem',
      sending: 'Enviando...',
      success: '✅ Mensagem enviada! Entrarei em contato em breve pelo LinkedIn.',
    },
    footer: {
      about: 'Sobre',
      skills: 'Habilidades',
      projects: 'Projetos',
      experience: 'Experiência',
      contact: 'Contato',
      copy: 'Feito com',
      love: 'amor',
      tail: 'e muito café ☕',
    },
    form: {
      successTimeout: 5000,
    },
  },
};

let currentLanguage = localStorage.getItem('portfolio-language') || CONFIG.defaultLanguage;

// ===========================
// Typed Text Animation
// ===========================
let typedStrings = I18N[currentLanguage].hero ? [
  'Software Developer',
  'Computer Engineer',
  'Leadership Mindset',
  'Solution Builder',
] : [];

let typedIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typedTimeoutId = null;

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

  typedTimeoutId = window.setTimeout(typeEffect, delay);
}

function resetTypedEffect(strings) {
  typedStrings = strings;
  typedIndex = 0;
  charIndex = 0;
  isDeleting = false;

  if (typedTimeoutId) {
    clearTimeout(typedTimeoutId);
  }

  const el = document.getElementById('typed');
  if (el) {
    el.textContent = '';
  }

  typeEffect();
}

function setText(selector, value) {
  document.querySelectorAll(selector).forEach(el => {
    el.textContent = value;
  });
}

function setHTML(selector, value) {
  document.querySelectorAll(selector).forEach(el => {
    el.innerHTML = value;
  });
}

function setAttr(selector, attribute, value) {
  document.querySelectorAll(selector).forEach(el => {
    el.setAttribute(attribute, value);
  });
}

function updateLanguageButtons() {
  document.querySelectorAll('.language-btn').forEach(btn => {
    const isActive = btn.dataset.lang === currentLanguage;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

function initLanguageSwitcher() {
  document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const nextLanguage = btn.dataset.lang;
      if (nextLanguage && nextLanguage !== currentLanguage) {
        applyLanguage(nextLanguage, true);
      }
    });
  });
}

function applyLanguage(language, restartTyping = false) {
  const content = I18N[language] || I18N[CONFIG.defaultLanguage];
  currentLanguage = language in I18N ? language : CONFIG.defaultLanguage;

  localStorage.setItem('portfolio-language', currentLanguage);
  document.documentElement.lang = content.htmlLang;
  document.title = content.title;

  setAttr('meta[name="description"]', 'content', content.description);
  setAttr('meta[property="og:title"]', 'content', content.ogTitle);
  setAttr('meta[property="og:description"]', 'content', content.ogDescription);

  setAttr('nav', 'aria-label', content.nav.main);
  setAttr('.nav-logo', 'aria-label', content.nav.home);
  setAttr('#navToggle', 'aria-label', content.nav.openMenu);

  setText('.nav-links a[href="#about"]', content.nav.about);
  setText('.nav-links a[href="#skills"]', content.nav.skills);
  setText('.nav-links a[href="#projects"]', content.nav.projects);
  setText('.nav-links a[href="#experience"]', content.nav.experience);
  setText('.nav-links a[href="#contact"]', content.nav.contact);

  setText('.hero-badge span', content.hero.badge);
  setText('.hero-greeting', content.hero.greeting);
  setText('.hero-description', content.hero.description);
  setText('.hero-cta .btn-primary', content.hero.primaryCta);
  setText('.hero-cta .btn-outline', content.hero.secondaryCta);
  setText('.scroll-indicator span', content.hero.scroll);

  setText('#about .section-badge', content.about.badge);
  setHTML('#about .section-title', `${content.about.titleMain} <span>${content.about.titleAccent}</span>`);
  setText('#about .section-subtitle', content.about.subtitle);
  setText('#about .stat-card:nth-of-type(1) .stat-label', content.about.repositories);
  setText('#about .stat-card:nth-of-type(2) .stat-label', content.about.stars);
  setText('#about .about-text:nth-of-type(1)', content.about.text1);
  setText('#about .about-text:nth-of-type(2)', content.about.text2);
  setText('#about .info-item:nth-of-type(1) .info-label', `📍 ${content.about.location}`);
  setText('#about .info-item:nth-of-type(1) .info-value', content.about.locationValue);
  setText('#about .info-item:nth-of-type(2) .info-label', `💼 ${content.about.status}`);
  setText('#about .info-item:nth-of-type(2) .info-value', content.about.statusValue);
  setText('#about .info-item:nth-of-type(3) .info-label', `🎓 ${content.about.education}`);
  setText('#about .info-item:nth-of-type(3) .info-value', content.about.educationValue);
  setText('#about .about-content a.btn-primary', content.about.viewGithub);
  setText('#about .about-content a.btn-outline', content.about.viewLinkedIn);

  setText('#skills .section-badge', content.skills.badge);
  setHTML('#skills .section-title', `${content.skills.titleMain} <span>${content.skills.titleAccent}</span>`);
  setText('#skills .section-subtitle', content.skills.subtitle);
  setText('#skills .skill-category:nth-of-type(1) .skill-category-title', content.skills.languages);
  setText('#skills .skill-category:nth-of-type(2) .skill-category-title', content.skills.frameworks);
  setText('#skills .skill-category:nth-of-type(3) .skill-category-title', content.skills.databases);
  setText('#skills .skill-category:nth-of-type(4) .skill-category-title', content.skills.tools);

  setText('#projects .section-badge', content.projects.badge);
  setHTML('#projects .section-title', `${content.projects.titleMain} <span>${content.projects.titleAccent}</span>`);
  setText('#projects .section-subtitle', content.projects.subtitle);
  setAttr('#filterButtons', 'aria-label', content.projects.filterLabel);
  setText('#projects .projects-loading p', content.projects.loading);
  setText('#uiux .section-badge', content.uiux.badge);
  setHTML('#uiux .section-title', `${content.uiux.titleMain} <span>${content.uiux.titleAccent}</span>`);
  setText('#uiux .section-subtitle', content.uiux.subtitle);
  setText('#uiux .uiux-card:nth-of-type(1) .uiux-title', content.uiux.focusTitle);
  setText('#uiux .uiux-card:nth-of-type(1) .uiux-text', content.uiux.focusText);
  setText('#uiux .uiux-card:nth-of-type(2) .uiux-title', content.uiux.prototypeTitle);
  setText('#uiux .uiux-card:nth-of-type(2) .uiux-text', content.uiux.prototypeText);
  setText('#uiux .uiux-card:nth-of-type(3) .uiux-title', content.uiux.consistencyTitle);
  setText('#uiux .uiux-card:nth-of-type(3) .uiux-text', content.uiux.consistencyText);
  setText('#uiux .uiux-cta a', content.uiux.cta);
  setAttr('#uiux .uiux-cta a', 'aria-label', content.uiux.ctaLabel);

  setText('#experience .section-badge', content.experience.badge);
  setHTML('#experience .section-title', `${content.experience.titleMain} <span>${content.experience.titleAccent}</span>`);
  setText('#experience .section-subtitle', content.experience.subtitle);
  document.querySelectorAll('#experience .timeline-item').forEach((item, index) => {
    const entry = content.experience.items[index];
    if (!entry) return;
    const date = item.querySelector('.timeline-date');
    const title = item.querySelector('.timeline-title');
    const company = item.querySelector('.timeline-company');
    const desc = item.querySelector('.timeline-desc');
    if (date) date.textContent = entry.date;
    if (title) title.textContent = entry.title;
    if (company) company.textContent = entry.company;
    if (desc) desc.textContent = entry.desc;
  });

  setText('#contact .section-badge', content.contact.badge);
  setHTML('#contact .section-title', `${content.contact.titleMain} <span>${content.contact.titleAccent}</span>`);
  setText('#contact .section-subtitle', content.contact.subtitle);
  setText('#contact .contact-text', content.contact.text);
  setText('#contact .contact-item:nth-of-type(1) .contact-item-label', 'LinkedIn');
  setText('#contact .contact-item:nth-of-type(1) .contact-item-text', 'linkedin.com/in/ivamaroque');
  setText('#contact .contact-item:nth-of-type(2) .contact-item-label', 'GitHub');
  setText('#contact .contact-item:nth-of-type(2) .contact-item-text', 'github.com/Ivamaroque');
  setText('#contact .contact-item:nth-of-type(3) .contact-item-label', content.contact.directMessage);
  setText('#contact .contact-item:nth-of-type(3) .contact-item-text', content.contact.directMessageText);
  setAttr('#formName', 'placeholder', content.contact.namePlaceholder);
  setAttr('#formEmail', 'placeholder', content.contact.emailPlaceholder);
  setAttr('#formSubject', 'placeholder', content.contact.subjectPlaceholder);
  setAttr('#formMessage', 'placeholder', content.contact.messagePlaceholder);
  setText('label[for="formName"]', content.contact.name);
  setText('label[for="formEmail"]', content.contact.email);
  setText('label[for="formSubject"]', content.contact.subject);
  setText('label[for="formMessage"]', content.contact.message);
  setText('.form-submit', content.contact.submit);

  setText('.footer-links a[href="#about"]', content.footer.about);
  setText('.footer-links a[href="#skills"]', content.footer.skills);
  setText('.footer-links a[href="#projects"]', content.footer.projects);
  setText('.footer-links a[href="#experience"]', content.footer.experience);
  setText('.footer-links a[href="#contact"]', content.footer.contact);
  setHTML('.footer-copy', `© <span id="currentYear"></span> Ivamaroque. ${content.footer.copy} <span aria-label="${content.footer.love}">❤️</span> ${content.footer.tail}`);

  updateLanguageButtons();

  if (restartTyping) {
    resetTypedEffect([
      ...(currentLanguage === 'pt'
        ? ['Desenvolvedor de Software', 'Engenheiro de Computação', 'Senso de Liderança', 'Criador de Soluções']
        : ['Software Developer', 'Computer Engineer', 'Leadership Mindset', 'Solution Builder']),
    ]);
  }

  renderFilterButtons();
  renderProjects();
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
let contactFormInitialized = false;
let isReposLoading = true;

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

    isReposLoading = false;
    updateStats(repos);
    renderProjects();
    renderFilterButtons();
  } catch (err) {
    isReposLoading = false;
    const content = I18N[currentLanguage].projects;
    grid.innerHTML = `
      <div class="projects-empty">
        <div class="projects-empty-icon">😔</div>
        <p>${content.emptyError}</p>
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

  const content = I18N[currentLanguage].projects;

  const langs = ['all', ...new Set(allRepos.map(r => r.language).filter(Boolean))].slice(0, 8);

  container.innerHTML = langs
    .map(
      lang => `
      <button class="filter-btn ${lang === 'all' ? 'active' : ''}" data-lang="${lang}">
        ${lang === 'all' ? `🗂️ ${content.all}` : lang}
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

  const content = I18N[currentLanguage].projects;

  if (isReposLoading) {
    grid.innerHTML = `
      <div class="projects-loading">
        <div class="spinner" aria-hidden="true"></div>
        <p>${content.loading}</p>
      </div>
    `;
    if (showMoreBtn) showMoreBtn.style.display = 'none';
    return;
  }

  const filtered =
    activeFilter === 'all'
      ? allRepos
      : allRepos.filter(r => r.language === activeFilter);

  const visible = filtered.slice(0, visibleCount);

  if (visible.length === 0) {
    grid.innerHTML = `
      <div class="projects-empty">
        <div class="projects-empty-icon">📭</div>
        <p>${content.emptyFiltered}</p>
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
      showMoreBtn.textContent = content.showMore(filtered.length - visibleCount);
      showMoreBtn.setAttribute('aria-label', showMoreBtn.textContent);
    } else {
      showMoreBtn.style.display = 'none';
    }
  }
}

function createProjectCard(repo, index) {
  const content = I18N[currentLanguage].projects;
  const lang = repo.language || 'N/A';
  const color = getLangColor(repo.language);
  const icon = getProjectIcon(repo.language);
  const desc = repo.description || content.noDescription;
  const dateLocale = currentLanguage === 'pt' ? 'pt-BR' : 'en-US';
  const updatedAt = new Date(repo.updated_at).toLocaleDateString(dateLocale);

  return `
    <a class="project-card" href="${repo.html_url}" target="_blank" rel="noopener"
       style="animation-play-state: paused;">
      <div class="project-card-header">
        <span class="project-icon">${icon}</span>
        <div class="project-links">
          <span class="project-link-btn" title="${content.viewGitHub}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </span>
          ${repo.homepage ? `<a class="project-link-btn" href="${repo.homepage}" target="_blank" rel="noopener" title="${content.viewDemo}" onclick="event.stopPropagation()">🔗</a>` : ''}
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

  if (contactFormInitialized) return;
  contactFormInitialized = true;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    const submitBtn = form.querySelector('.form-submit');
    const content = I18N[currentLanguage].contact;

    submitBtn.textContent = content.sending;
    submitBtn.disabled = true;

    // Simulate form submission — replace the fetch below with a real form service endpoint
    // (e.g., Formspree: https://formspree.io) for actual email delivery.
    setTimeout(() => {
      status.textContent = content.success;
      status.className = 'form-status success';
      form.reset();
      submitBtn.textContent = content.submit;
      submitBtn.disabled = false;

      setTimeout(() => {
        status.textContent = '';
      }, I18N[currentLanguage].form.successTimeout);
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
  initLanguageSwitcher();
  applyLanguage(currentLanguage);
  createParticles();
  initNav();
  initReveal();
  initContactForm();
  initShowMore();
  initSmoothScroll();
  updateYear();
  typeEffect();
  fetchGitHubRepos();
});
