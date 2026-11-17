// All site content lives in the objects below. Edit them to update the page.

const UI = {
  es: {
    title: 'Miguel Ángel Hernández · Ingeniero de software en formación',
    skip: 'Saltar al contenido',
    'nav.projects': 'Proyectos', 'nav.education': 'Formación', 'nav.tools': 'Herramientas', 'nav.contact': 'Contacto',
    'hero.sub': 'Ingeniero de software en formación.',
    'hero.meta': 'Estudiante de cuarto año de Ingeniería en Desarrollo de Software en la Universidad de Oriente (UNIVO). Construyo aplicaciones web, móviles y de machine learning de punta a punta.',
    'hero.cta': 'Escríbeme',
    'hero.projects': 'Ver proyectos',
    'projects.title': 'Proyectos.',
    'projects.sub': 'Lo que construí y qué parte hice yo en cada uno.',
    'education.title': 'Formación.',
    'education.school': 'Universidad de Oriente (UNIVO) · 4.º año',
    'education.degree': 'Ingeniería en Desarrollo de Software',
    'certs.title': 'Certificaciones',
    'tools.title': 'Herramientas.',
    'tools.sub': 'Con lo que trabajo, de la base de datos a la interfaz.',
    'contact.title': 'Construyamos algo.',
    'contact.sub': '¿Tienes una vacante, una práctica o un proyecto freelance? Escríbeme y te respondo.',
    quote: '“Haz que funcione, hazlo bien, hazlo rápido.” — Kent Beck',
    what: 'Qué hace',
    part: 'Mi parte',
    stack: 'Tecnologías',
    repo: 'Ver repositorio',
    privateRepo: 'Repositorio privado',
  },
  en: {
    title: 'Miguel Ángel Hernández · Software engineer in training',
    skip: 'Skip to content',
    'nav.projects': 'Projects', 'nav.education': 'Education', 'nav.tools': 'Tools', 'nav.contact': 'Contact',
    'hero.sub': 'Software engineer in training.',
    'hero.meta': 'Fourth-year Software Development Engineering student at Universidad de Oriente (UNIVO). I build web, mobile and machine learning apps end to end.',
    'hero.cta': 'Write to me',
    'hero.projects': 'See projects',
    'projects.title': 'Projects.',
    'projects.sub': 'What I built, and which part was mine.',
    'education.title': 'Education.',
    'education.school': 'Universidad de Oriente (UNIVO) · Fourth year',
    'education.degree': 'Software Development Engineering',
    'certs.title': 'Certifications',
    'tools.title': 'Tools.',
    'tools.sub': 'What I work with, from the database to the interface.',
    'contact.title': "Let's build something.",
    'contact.sub': 'Have an opening, an internship or a freelance project? Write to me and I will get back to you.',
    quote: '“Make it work, make it right, make it fast.” — Kent Beck',
    what: 'What it does',
    part: 'My part',
    stack: 'Technologies',
    repo: 'View repository',
    privateRepo: 'Private repository',
  },
};

// wide: the tile spans both columns.
const PROJECTS = [
  {
    id: 'churnguard', name: 'ChurnGuard', wide: true,
    url: 'https://github.com/Shadow01xd/churn-app-predictor',
    stack: ['React', 'TypeScript', 'NestJS', 'FastAPI', 'scikit-learn', 'PostgreSQL', 'Docker'],
    stat: '0.82',
    es: {
      tag: 'Sabe qué clientes están por irse.',
      statLabel: 'ROC-AUC del modelo Random Forest, entrenado con el dataset Telco Customer Churn.',
      what: 'Plataforma para empresas de telecomunicaciones: un dashboard ordena a los clientes según su probabilidad de cancelar, para que el equipo de retención actúe a tiempo.',
      part: 'Proyecto individual: lo hice completo.',
      points: ['Entrenamiento del modelo', 'Microservicio FastAPI para la inferencia', 'API NestJS con autenticación JWT', 'Frontend en React'],
    },
    en: {
      tag: 'Knows which customers are about to leave.',
      statLabel: 'ROC-AUC of the Random Forest model, trained on the Telco Customer Churn dataset.',
      what: 'Platform for telecom companies: a dashboard ranks customers by their probability of cancelling, so the retention team can act in time.',
      part: 'Solo project: I built all of it.',
      points: ['Model training', 'FastAPI inference microservice', 'NestJS API with JWT auth', 'React frontend'],
    },
  },
  {
    id: 'nvcode', name: 'NVCode',
    url: 'https://github.com/Shadow01xd/NovaIDE',
    stack: ['Electron', 'JavaScript', 'Ollama', 'Monaco'],
    stat: '3',
    es: {
      tag: 'Un editor de código con un agente de IA que trabaja en local.',
      statLabel: 'personas en el equipo.',
      what: 'Editor de escritorio con un agente de IA que funciona con modelos locales a través de Ollama.',
      part: 'Desarrollé el agente de IA:',
      points: ['Leer, crear y editar archivos', 'Modo planificador y permisos', 'Vista previa, checkpoints y rollback'],
    },
    en: {
      tag: 'A code editor with an AI agent that runs locally.',
      statLabel: 'people on the team.',
      what: 'Desktop editor with an AI agent that runs on local models through Ollama.',
      part: 'I built the AI agent:',
      points: ['Read, create and edit files', 'Planner mode and permissions', 'Previews, checkpoints and rollback'],
    },
  },
  {
    id: 'ticket', name: 'Sistema-Ticket-CRS',
    url: 'https://github.com/melissaraujo00/Sistema-Ticket-CRS',
    stack: ['Laravel', 'PHP', 'React', 'Inertia', 'MySQL'],
    stat: '15+',
    es: {
      tag: 'Soporte ordenado, de la incidencia a la solución.',
      statLabel: 'desarrolladores en el equipo.',
      what: 'Sistema de tickets: los usuarios reportan incidencias, asignan prioridades y siguen cada ticket hasta resolverlo.',
      part: 'Fui uno de los Scrum Masters:',
      points: ['Coordinaba módulos con los otros Scrum Masters', 'Escribía las historias de usuario', 'Revisaba código e integraba los pull requests'],
    },
    en: {
      tag: 'Support, organized from report to resolution.',
      statLabel: 'developers on the team.',
      what: 'Ticket system: users report incidents, set priorities and track each ticket until it is resolved.',
      part: 'I was one of the Scrum Masters:',
      points: ['Coordinated modules with the other Scrum Masters', 'Wrote the user stories', 'Reviewed code and merged pull requests'],
    },
  },
  {
    id: 'siau', name: 'SIA-U', wide: true,
    url: null,
    stack: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
    stat: '6',
    es: {
      tag: 'La asistencia de toda una universidad, en un solo sistema.',
      statLabel: 'facultades de la Universidad de Oriente (UNIVO).',
      what: 'Sistema integrado de asistencia para la Universidad de Oriente, que cubre sus seis facultades.',
      part: 'Fui uno de los 7 desarrolladores del equipo. Hice:',
      points: ['Preregistro de eventos para organizadores, también para eventos de dos facultades', 'Paneles de alumno y docente, y el panel institucional para administradores', 'Gestión de cuentas del superadmin: editar, eliminar, cambiar correo y reenviar credenciales'],
    },
    en: {
      tag: 'Attendance for a whole university, in one system.',
      statLabel: 'faculties at Universidad de Oriente (UNIVO).',
      what: 'Integrated attendance system for Universidad de Oriente, covering its six faculties.',
      part: 'I was one of the 7 developers on the team. I built:',
      points: ['Event pre-registration for organizers, including two-faculty events', 'Student and teacher dashboards, and the institutional admin panel', 'Superadmin account management: edit, delete, change email and resend credentials'],
    },
  },
];

const TOOLS = [
  { es: 'Lenguajes', en: 'Languages', items: ['C#', 'Python', 'TypeScript', 'JavaScript', 'Kotlin', 'PHP', 'Rust'] },
  { es: 'Frontend', en: 'Frontend', items: ['React', 'Vue', 'Vite', 'Tailwind', 'HTML', 'CSS'] },
  { es: 'Backend y datos', en: 'Backend & data', items: ['.NET', 'Laravel', 'NestJS', 'FastAPI', 'Supabase', 'PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'] },
  { es: 'Machine learning', en: 'Machine learning', items: ['scikit-learn', 'pandas', 'Anaconda', 'Google Colab'] },
  { es: 'Herramientas', en: 'Tooling', items: ['Docker', 'Git', 'GitHub'] },
  { es: 'Aprendiendo', en: 'Learning', items: ['Rust', 'TypeScript', 'React', 'Vue', 'ML avanzado / advanced ML'] },
];

const CERTS = [
  { date: '2026-11', es: 'Fundamentos de Arquitectura de Software', en: 'Software Architecture Fundamentals', issuer: 'Platzi', url: null },
  { date: '2026-09', es: 'Business Intelligence y Deep Research con IA', en: 'Business Intelligence & Deep Research with AI', issuer: 'Platzi', url: null },
  { date: '2026-01', es: 'Curso Profesional de Scrum', en: 'Professional Scrum Course', issuer: 'Platzi', url: null },
  { date: '2026-01', es: 'Design Thinking', en: 'Design Thinking', issuer: 'Platzi', url: null },
  { date: '2026-01', es: 'Glosario de Diseño de Producto', en: 'Product Design Glossary', issuer: 'Platzi', url: null },
  { date: '2026-01', es: 'Habilidades Blandas para el Desarrollo Profesional', en: 'Soft Skills for Professional Development', issuer: 'Platzi', url: null },
  { date: '2025-05', es: 'Scrum Fundamentals Certified (SFC)', en: 'Scrum Fundamentals Certified (SFC)', issuer: 'SCRUMstudy', url: null },
  { date: '2023-05', es: 'Webinar: IA en la Educación', en: 'Webinar: AI in Education', issuer: 'SIGUE-e', url: null },
];

// ── Helpers ────────────────────────────────────────────────────────────
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (value == null || value === false) continue;
    node.setAttribute(key === 'className' ? 'class' : key, value);
  }
  for (const child of children.flat()) {
    if (child == null || child === false) continue;
    node.append(child instanceof Node ? child : document.createTextNode(child));
  }
  return node;
}
function chevron() {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('class', 'chev');
  svg.setAttribute('viewBox', '0 0 8 14');
  svg.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS(ns, 'path');
  path.setAttribute('d', 'M1.5 1.5 6.5 7l-5 5.5');
  svg.append(path);
  return svg;
}
function storage(action, value) {
  try {
    if (action === 'get') return localStorage.getItem('lang');
    localStorage.setItem('lang', value);
  } catch { /* storage unavailable: the language is simply not remembered */ }
  return null;
}
function formatDate(ym, lang) {
  const [y, m] = ym.split('-').map(Number);
  return new Intl.DateTimeFormat(lang, { month: 'short', year: 'numeric' }).format(new Date(y, m - 1, 1));
}

// ── Renderers ─────────────────────────────────────────────────────────
function renderProjects(lang) {
  const t = UI[lang];
  document.getElementById('projects').replaceChildren(...PROJECTS.map((p) => {
    const c = p[lang];
    const details = [
      el('div', { className: 'detail' }, el('h4', {}, t.what), el('p', {}, c.what)),
      c.part ? el('div', { className: 'detail' },
        el('h4', {}, t.part),
        el('p', {}, c.part),
        c.points.length ? el('ul', {}, c.points.map((x) => el('li', {}, x))) : null) : null,
      el('div', { className: 'detail' }, el('h4', {}, t.stack), el('p', {}, p.stack.map((s) => s.replace(/-/g, '‑')).join(' · '))),
    ];
    return el('article', { className: `tile project reveal${p.wide ? ' wide' : ''}`, id: `p-${p.id}` },
      el('h3', { className: 'project-name' }, p.name),
      el('p', { className: 'project-tag' }, c.tag),
      el('div', { className: 'stat' },
        el('span', { className: 'stat-value' }, p.stat),
        el('span', { className: 'stat-label' }, c.statLabel)),
      el('div', { className: 'project-detail' }, details),
      p.url
        ? el('a', { className: 'more project-link', href: p.url, target: '_blank', rel: 'noopener' }, t.repo, chevron())
        : el('p', { className: 'project-private' }, t.privateRepo));
  }));
}

function renderTools(lang) {
  document.getElementById('specs').replaceChildren(...TOOLS.flatMap((g) => {
    const items = g.items.map((i) => (i.includes(' / ') ? i.split(' / ')[lang === 'es' ? 0 : 1] : i));
    return [el('dt', {}, g[lang]), el('dd', {}, items.join(', '))];
  }));
}

function renderCerts(lang) {
  document.getElementById('certs').replaceChildren(...CERTS.map((c) =>
    el('li', {},
      el('span', { className: 'cert-name' }, c[lang]),
      c.url
        ? el('a', { className: 'cert-issuer', href: c.url, target: '_blank', rel: 'noopener' }, c.issuer)
        : el('span', { className: 'cert-issuer' }, c.issuer),
      el('span', { className: 'cert-date' }, formatDate(c.date, lang)))));
}

// ── Reveal on scroll: content is visible by default; only elements still
// below the fold are hidden, and only when the browser can animate them in.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const observer = !reduceMotion && 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.remove('pre');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -8% 0px' })
  : null;

function armReveals() {
  if (!observer) return;
  for (const node of document.querySelectorAll('.reveal:not([data-armed])')) {
    node.dataset.armed = '';
    if (node.getBoundingClientRect().top > window.innerHeight) {
      node.classList.add('pre');
      observer.observe(node);
    }
  }
}

// ── Language ──────────────────────────────────────────────────────────
function setLang(lang) {
  const t = UI[lang];
  document.documentElement.lang = lang;
  document.title = t.title;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const value = t[node.dataset.i18n];
    if (typeof value === 'string') node.textContent = value;
  });
  document.querySelectorAll('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  renderProjects(lang);
  renderTools(lang);
  renderCerts(lang);
  armReveals();
  storage('set', lang);
}

document.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
document.getElementById('year').textContent = String(new Date().getFullYear());

const saved = storage('get');
setLang(saved === 'es' || saved === 'en' ? saved : (navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es');
