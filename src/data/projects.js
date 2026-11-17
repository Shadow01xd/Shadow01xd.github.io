/**
 * Proyectos destacados. Cada uno es un "nivel" en la selección de niveles.
 *
 * @typedef {'coin' | 'cyan' | 'pink' | 'lime'} StageColor
 *
 * @typedef {object} ProjectCopy
 * @property {string}   tag        Frase corta que resume el proyecto.
 * @property {string}   scoreUnit  Unidad corta de `score` (se ve en la pestaña).
 * @property {string}   scoreLabel Qué mide exactamente `score`.
 * @property {string}   what       Qué hace el proyecto.
 * @property {string}   part       Mi rol en el proyecto.
 * @property {string[]} points     Lo que hice yo, en concreto.
 *
 * @typedef {object} Project
 * @property {string}      id
 * @property {string}      name
 * @property {StageColor}  color  Color de la marquesina del nivel.
 * @property {string|null} url    Repositorio público, o null si es privado.
 * @property {string[]}    stack
 * @property {string}      score  La cifra clave (real) del proyecto.
 * @property {ProjectCopy} es
 * @property {ProjectCopy} en
 */

/** @type {readonly Project[]} */
export const PROJECTS = Object.freeze([
  {
    id: 'churnguard',
    name: 'ChurnGuard',
    color: 'coin',
    url: 'https://github.com/Shadow01xd/churn-app-predictor',
    stack: ['React', 'TypeScript', 'NestJS', 'FastAPI', 'scikit-learn', 'PostgreSQL', 'Docker'],
    score: '0.82',
    es: {
      scoreUnit: 'ROC-AUC',
      tag: 'Sabe qué clientes están por irse.',
      scoreLabel: 'ROC-AUC del modelo Random Forest, entrenado con el dataset Telco Customer Churn.',
      what: 'Plataforma para empresas de telecomunicaciones: un dashboard ordena a los clientes según su probabilidad de cancelar, para que el equipo de retención actúe a tiempo.',
      part: 'Proyecto individual: lo hice completo.',
      points: ['Entrenamiento del modelo', 'Microservicio FastAPI para la inferencia', 'API NestJS con autenticación JWT', 'Frontend en React'],
    },
    en: {
      scoreUnit: 'ROC-AUC',
      tag: 'Knows which customers are about to leave.',
      scoreLabel: 'ROC-AUC of the Random Forest model, trained on the Telco Customer Churn dataset.',
      what: 'Platform for telecom companies: a dashboard ranks customers by their probability of cancelling, so the retention team can act in time.',
      part: 'Solo project: I built all of it.',
      points: ['Model training', 'FastAPI inference microservice', 'NestJS API with JWT auth', 'React frontend'],
    },
  },
  {
    id: 'nvcode',
    name: 'NVCode',
    color: 'cyan',
    url: 'https://github.com/Shadow01xd/NovaIDE',
    stack: ['Electron', 'JavaScript', 'Ollama', 'Monaco'],
    score: '3',
    es: {
      scoreUnit: 'personas',
      tag: 'Un editor de código con un agente de IA que trabaja en local.',
      scoreLabel: 'personas en el equipo.',
      what: 'Editor de escritorio con un agente de IA que funciona con modelos locales a través de Ollama.',
      part: 'Desarrollé el agente de IA:',
      points: ['Leer, crear y editar archivos', 'Modo planificador y permisos', 'Vista previa, checkpoints y rollback'],
    },
    en: {
      scoreUnit: 'people',
      tag: 'A code editor with an AI agent that runs locally.',
      scoreLabel: 'people on the team.',
      what: 'Desktop editor with an AI agent that runs on local models through Ollama.',
      part: 'I built the AI agent:',
      points: ['Read, create and edit files', 'Planner mode and permissions', 'Previews, checkpoints and rollback'],
    },
  },
  {
    id: 'ticket',
    name: 'Sistema-Ticket-CRS',
    color: 'pink',
    url: 'https://github.com/melissaraujo00/Sistema-Ticket-CRS',
    stack: ['Laravel', 'PHP', 'React', 'Inertia', 'MySQL'],
    score: '15+',
    es: {
      scoreUnit: 'desarrolladores',
      tag: 'Soporte ordenado, de la incidencia a la solución.',
      scoreLabel: 'desarrolladores en el equipo.',
      what: 'Sistema de tickets: los usuarios reportan incidencias, asignan prioridades y siguen cada ticket hasta resolverlo.',
      part: 'Fui uno de los Scrum Masters:',
      points: ['Coordinaba módulos con los otros Scrum Masters', 'Escribía las historias de usuario', 'Revisaba código e integraba los pull requests'],
    },
    en: {
      scoreUnit: 'developers',
      tag: 'Support, organized from report to resolution.',
      scoreLabel: 'developers on the team.',
      what: 'Ticket system: users report incidents, set priorities and track each ticket until it is resolved.',
      part: 'I was one of the Scrum Masters:',
      points: ['Coordinated modules with the other Scrum Masters', 'Wrote the user stories', 'Reviewed code and merged pull requests'],
    },
  },
  {
    id: 'siau',
    name: 'SIA-U',
    color: 'lime',
    url: null,
    stack: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
    score: '6',
    es: {
      scoreUnit: 'facultades',
      tag: 'La asistencia de toda una universidad, en un solo sistema.',
      scoreLabel: 'facultades de la Universidad de Oriente (UNIVO).',
      what: 'Sistema integrado de asistencia para la Universidad de Oriente, que cubre sus seis facultades.',
      part: 'Fui uno de los 7 desarrolladores del equipo. Hice:',
      points: ['Preregistro de eventos para organizadores, también para eventos de dos facultades', 'Paneles de alumno y docente, y el panel institucional para administradores', 'Gestión de cuentas del superadmin: editar, eliminar, cambiar correo y reenviar credenciales'],
    },
    en: {
      scoreUnit: 'faculties',
      tag: 'Attendance for a whole university, in one system.',
      scoreLabel: 'faculties at Universidad de Oriente (UNIVO).',
      what: 'Integrated attendance system for Universidad de Oriente, covering its six faculties.',
      part: 'I was one of the 7 developers on the team. I built:',
      points: ['Event pre-registration for organizers, including two-faculty events', 'Student and teacher dashboards, and the institutional admin panel', 'Superadmin account management: edit, delete, change email and resend credentials'],
    },
  },
]);
