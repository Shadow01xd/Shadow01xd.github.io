// Portfolio content lives here: edit the objects below to update the site.

const UI = {
  es: {
    skip: 'Saltar al contenido',
    'nav.projects': 'Proyectos', 'nav.stack': 'Stack', 'nav.certs': 'Certificaciones', 'nav.contact': 'Contacto',
    'hero.eyebrow': 'Desarrollador Full Stack · Estudiante de Desarrollo de Software',
    'hero.lead': 'Construyo aplicaciones web, móviles y de machine learning de punta a punta: del modelo y la API a la interfaz que usa la gente.',
    'hero.cta': 'Ver proyectos',
    'projects.title': 'Proyectos destacados',
    'projects.sub': 'Qué hace cada uno y qué parte hice yo.',
    'stack.title': 'Stack tecnológico',
    'certs.title': 'Certificaciones',
    'contact.title': 'Hablemos',
    'contact.sub': '¿Tienes un proyecto, una práctica o una vacante? Escríbeme.',
    footer: 'Hecho a mano con HTML, CSS y JavaScript · Publicado en GitHub Pages',
    quote: '“Haz que funcione, hazlo bien, hazlo rápido.” — Kent Beck',
    myPart: 'Mi parte:',
    viewRepo: 'Ver repositorio ↗',
    privateRepo: 'Repositorio privado',
    typed: ['creando apps web y móviles', 'entrenando modelos de ML', 'React · TypeScript · Laravel · Kotlin', 'siempre aprendiendo, siempre entregando 🚀'],
    title: 'Shadow01xd · Desarrollador Full Stack',
  },
  en: {
    skip: 'Skip to content',
    'nav.projects': 'Projects', 'nav.stack': 'Stack', 'nav.certs': 'Certifications', 'nav.contact': 'Contact',
    'hero.eyebrow': 'Full Stack Developer · Software Development Student',
    'hero.lead': 'I build web, mobile and machine learning apps end to end: from the model and the API to the interface people use.',
    'hero.cta': 'See projects',
    'projects.title': 'Featured projects',
    'projects.sub': 'What each one does and which part I built.',
    'stack.title': 'Tech stack',
    'certs.title': 'Certifications',
    'contact.title': "Let's talk",
    'contact.sub': 'Have a project, an internship or an opening? Write to me.',
    footer: 'Handmade with HTML, CSS and JavaScript · Hosted on GitHub Pages',
    quote: '“Make it work, make it right, make it fast.” — Kent Beck',
    myPart: 'My part:',
    viewRepo: 'View repository ↗',
    privateRepo: 'Private repository',
    typed: ['building web & mobile apps', 'training ML models', 'React · TypeScript · Laravel · Kotlin', 'always learning, always shipping 🚀'],
    title: 'Shadow01xd · Full Stack Developer',
  },
};

const PROJECTS = [
  {
    icon: '📉',
    name: 'ChurnGuard',
    url: 'https://github.com/Shadow01xd/churn-app-predictor',
    featured: true,
    stack: ['React', 'TypeScript', 'NestJS', 'FastAPI', 'scikit-learn', 'PostgreSQL', 'Docker'],
    es: {
      role: 'Proyecto individual',
      desc: 'Plataforma de predicción de abandono (churn) para empresas de telecomunicaciones. Un dashboard ordena a los clientes según su probabilidad de cancelar para que el equipo de retención actúe a tiempo.',
      part: 'todo el proyecto, desde el entrenamiento del modelo hasta la app web.',
      highlights: [
        'Random Forest entrenado con Telco Customer Churn · ROC-AUC 0,82',
        'Microservicio FastAPI para la inferencia, detrás de una API NestJS',
        'Autenticación JWT, límite de intentos y validación de coherencia de datos',
      ],
    },
    en: {
      role: 'Solo project',
      desc: 'Churn prediction platform for telecom companies. A dashboard ranks customers by their probability of cancelling so the retention team can act in time.',
      part: 'the whole project, from model training to the web app.',
      highlights: [
        'Random Forest trained on Telco Customer Churn · ROC-AUC 0.82',
        'FastAPI microservice for inference, behind a NestJS API',
        'JWT auth, rate limiting and input coherence checks',
      ],
    },
  },
  {
    icon: '🧑‍💻',
    name: 'NVCode',
    url: 'https://github.com/Shadow01xd/NovaIDE',
    stack: ['Electron', 'JavaScript', 'Ollama', 'Monaco'],
    es: {
      role: 'Equipo de 3',
      desc: 'Editor de código de escritorio con un agente de IA integrado que funciona con modelos locales a través de Ollama.',
      part: 'desarrollé el agente de IA.',
      highlights: [
        'Herramientas para leer, crear y editar archivos del proyecto',
        'Modo planificador y solicitudes de permiso',
        'Previsualización de cambios, checkpoints y rollback',
      ],
    },
    en: {
      role: 'Team of 3',
      desc: 'Desktop code editor with a built-in AI agent that runs on local models through Ollama.',
      part: 'I built the AI agent.',
      highlights: [
        'Tools to read, create and edit project files',
        'Planner mode and permission prompts',
        'Change previews, checkpoints and rollback',
      ],
    },
  },
  {
    icon: '🎫',
    name: 'Sistema-Ticket-CRS',
    url: 'https://github.com/melissaraujo00/Sistema-Ticket-CRS',
    stack: ['Laravel', 'PHP', 'React', 'Inertia', 'MySQL'],
    es: {
      role: 'Scrum Master · equipo de 15+',
      desc: 'Sistema de tickets de soporte: los usuarios reportan incidencias, asignan prioridades y siguen cada ticket hasta que se resuelve.',
      part: 'fui uno de los Scrum Masters del equipo.',
      highlights: [
        'Coordinaba los módulos con los otros Scrum Masters',
        'Escribía las historias de usuario de mi equipo',
        'Revisaba código e integraba los pull requests a main',
      ],
    },
    en: {
      role: 'Scrum Master · team of 15+',
      desc: 'Support ticket system: users report incidents, set priorities and track each ticket until it is resolved.',
      part: 'I was one of the team’s Scrum Masters.',
      highlights: [
        'Coordinated modules with the other Scrum Masters',
        'Wrote the user stories for my team',
        'Reviewed code and merged pull requests into main',
      ],
    },
  },
  {
    icon: '🎓',
    name: 'SIA-U',
    url: null,
    stack: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
    es: {
      role: 'Universidad de Oriente',
      desc: 'Sistema integrado de asistencia para la Universidad de Oriente (UNIVO), que cubre sus seis facultades.',
      part: null,
      highlights: [],
    },
    en: {
      role: 'Universidad de Oriente',
      desc: 'Integrated attendance system for Universidad de Oriente (UNIVO), covering its six faculties.',
      part: null,
      highlights: [],
    },
  },
];

const STACK = [
  { es: 'Lenguajes', en: 'Languages', items: ['C#', 'Python', 'TypeScript', 'JavaScript', 'Kotlin', 'PHP', 'Rust'] },
  { es: 'Frontend', en: 'Frontend', items: ['React', 'Vue', 'Vite', 'Tailwind', 'HTML', 'CSS'] },
  { es: 'Backend y datos', en: 'Backend & data', items: ['.NET', 'Laravel', 'NestJS', 'FastAPI', 'Supabase', 'PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'] },
  { es: 'ML y herramientas', en: 'ML & tools', items: ['scikit-learn', 'pandas', 'Anaconda', 'Google Colab', 'Docker', 'Git'] },
];

const PLATZI = 'https://platzi.com/@mahh3899/';
const CERTS = [
  { date: '2026-11', es: 'Fundamentos de Arquitectura de Software', en: 'Software Architecture Fundamentals', issuer: 'Platzi', url: 'https://platzi.com/@miguelangelhernandez01xd/' },
  { date: '2026-09', es: 'Business Intelligence y Deep Research con IA', en: 'Business Intelligence & Deep Research with AI', issuer: 'Platzi', url: PLATZI },
  { date: '2026-01', es: 'Curso Profesional de Scrum', en: 'Professional Scrum Course', issuer: 'Platzi', url: PLATZI },
  { date: '2026-01', es: 'Design Thinking', en: 'Design Thinking', issuer: 'Platzi', url: PLATZI },
  { date: '2026-01', es: 'Glosario de Diseño de Producto', en: 'Product Design Glossary', issuer: 'Platzi', url: PLATZI },
  { date: '2026-01', es: 'Habilidades Blandas para el Desarrollo Profesional', en: 'Soft Skills for Professional Development', issuer: 'Platzi', url: PLATZI },
  { date: '2025-05', es: 'Scrum Fundamentals Certified (SFC)', en: 'Scrum Fundamentals Certified (SFC)', issuer: 'SCRUMstudy', url: null },
  { date: '2023-05', es: 'Webinar: IA en la Educación', en: 'Webinar: AI in Education', issuer: 'SIGUE-e', url: null },
];

const CODE = {
  es: [
    ['rol', '"Desarrollador Full Stack"'],
    ['enfoque', ['"Web"', '"Móvil"', '"Machine Learning"']],
    ['construyendo', ['"ChurnGuard"', '"NVCode"', '"SIA-U"']],
    ['aprendiendo', ['"Rust"', '"TypeScript"', '"React"', '"Vue"', '"ML avanzado"']],
    ['idiomas', ['"Español"', '"Inglés"']],
    ['datoCurioso', '"Convierto café en código ☕"'],
  ],
  en: [
    ['role', '"Full Stack Developer"'],
    ['focus', ['"Web"', '"Mobile"', '"Machine Learning"']],
    ['building', ['"ChurnGuard"', '"NVCode"', '"SIA-U"']],
    ['learning', ['"Rust"', '"TypeScript"', '"React"', '"Vue"', '"Advanced ML"']],
    ['languages', ['"Spanish"', '"English"']],
    ['funFact', '"I turn coffee into code ☕"'],
  ],
};

// ── Helpers ─────────────────────────────────────────────────────────────────
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (value == null) continue;
    if (key === 'class') node.className = value;
    else node.setAttribute(key, value);
  }
  for (const child of children.flat()) {
    if (child == null) continue;
    node.append(child instanceof Node ? child : document.createTextNode(child));
  }
  return node;
}

function storage(action, value) {
  try {
    if (action === 'get') return localStorage.getItem('lang');
    localStorage.setItem('lang', value);
  } catch { /* storage unavailable: language just won't be remembered */ }
  return null;
}

function formatDate(ym, lang) {
  const [y, m] = ym.split('-').map(Number);
  return new Intl.DateTimeFormat(lang === 'es' ? 'es' : 'en', { month: 'short', year: 'numeric' })
    .format(new Date(y, m - 1, 1));
}

// ── Renderers ───────────────────────────────────────────────────────────────
function renderCode(lang) {
  const tok = (cls, text) => el('span', { class: cls }, text);
  const lines = [[tok('tok-kw', 'const '), 'shadow01xd ', tok('tok-pun', '= {')]];
  for (const [key, value] of CODE[lang]) {
    const val = Array.isArray(value)
      ? [tok('tok-pun', '['), ...value.flatMap((v, i) => [i ? tok('tok-pun', ', ') : null, tok('tok-str', v)]), tok('tok-pun', ']')]
      : [tok('tok-str', value)];
    lines.push(['  ', tok('tok-key', key), tok('tok-pun', ': '), ...val, tok('tok-pun', ',')]);
  }
  lines.push([tok('tok-pun', '};')]);
  // One block per line so long arrays wrap with a hanging indent instead of overflowing.
  document.getElementById('code-card').replaceChildren(...lines.map((parts) => el('span', { class: 'line' }, parts)));
}

function renderProjects(lang) {
  const t = UI[lang];
  const cards = PROJECTS.map((p) => {
    const c = p[lang];
    const link = p.url
      ? el('a', { class: 'project-link', href: p.url, target: '_blank', rel: 'noopener' }, t.viewRepo)
      : el('span', { class: 'project-link muted' }, `🔒 ${t.privateRepo}`);
    return el('article', { class: `project reveal${p.featured ? ' featured' : ''}` },
      el('div', { class: 'project-top' },
        el('div', {}, el('span', { class: 'project-icon', 'aria-hidden': 'true' }, p.icon), el('h3', {}, p.name)),
        el('span', { class: 'role' }, c.role)),
      el('p', { class: 'project-desc' }, c.desc),
      c.part ? el('p', { class: 'project-part' }, el('strong', {}, t.myPart), ' ', c.part) : null,
      c.highlights.length ? el('ul', { class: 'highlights' }, c.highlights.map((h) => el('li', {}, h))) : null,
      el('div', { class: 'chips' }, p.stack.map((s) => el('span', { class: 'chip' }, s))),
      link);
  });
  document.getElementById('projects').replaceChildren(...cards);
}

function renderStack(lang) {
  document.getElementById('stack-groups').replaceChildren(...STACK.map((g) =>
    el('div', { class: 'stack-group reveal' },
      el('h3', {}, g[lang]),
      el('ul', {}, g.items.map((i) => el('li', {}, i))))));
}

function renderCerts(lang) {
  document.getElementById('certs').replaceChildren(...CERTS.map((c) =>
    el('li', { class: 'cert' },
      el('span', { class: 'cert-date' }, formatDate(c.date, lang)),
      el('span', { class: 'cert-name' }, c[lang]),
      c.url
        ? el('a', { class: 'cert-issuer', href: c.url, target: '_blank', rel: 'noopener' }, c.issuer)
        : el('span', { class: 'cert-issuer' }, c.issuer))));
}

// ── Typing effect ───────────────────────────────────────────────────────────
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let typingTimer = null;
function startTyping(lines) {
  clearTimeout(typingTimer);
  const target = document.getElementById('typed');
  if (reduceMotion) { target.textContent = lines[0]; return; }
  let line = 0, chars = 0, deleting = false;
  const step = () => {
    const text = lines[line];
    chars += deleting ? -1 : 1;
    target.textContent = Array.from(text).slice(0, chars).join('');
    let delay = deleting ? 28 : 55;
    if (!deleting && chars >= Array.from(text).length) { deleting = true; delay = 1600; }
    else if (deleting && chars <= 0) { deleting = false; line = (line + 1) % lines.length; delay = 350; }
    typingTimer = setTimeout(step, delay);
  };
  step();
}

// ── Reveal on scroll ────────────────────────────────────────────────────────
let observer = null;
function observeReveals() {
  const items = document.querySelectorAll('.reveal:not(.in)');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((n) => n.classList.add('in'));
    return;
  }
  observer ??= new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); }
    }
  }, { rootMargin: '0px 0px -8% 0px' });
  items.forEach((n) => observer.observe(n));
}

// ── Language ────────────────────────────────────────────────────────────────
function setLang(lang) {
  const t = UI[lang];
  document.documentElement.lang = lang;
  document.title = t.title;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const value = t[node.dataset.i18n];
    if (value) node.textContent = value;
  });
  document.querySelectorAll('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  renderCode(lang);
  renderProjects(lang);
  renderStack(lang);
  renderCerts(lang);
  startTyping(t.typed);
  observeReveals();
  storage('set', lang);
}

document.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

const saved = storage('get');
const initial = saved === 'es' || saved === 'en' ? saved : (navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es';
setLang(initial);
