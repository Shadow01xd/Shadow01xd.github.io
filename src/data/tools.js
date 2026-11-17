/**
 * Herramientas agrupadas por área.
 * Un elemento puede ser un texto o un objeto { es, en } cuando se traduce.
 *
 * @typedef {string | { es: string, en: string }} ToolItem
 * @typedef {{ id: string, es: string, en: string, items: ToolItem[] }} ToolGroup
 */

/** @type {readonly ToolGroup[]} */
export const TOOL_GROUPS = Object.freeze([
  { id: 'languages', es: 'Lenguajes', en: 'Languages', items: ['C#', 'Python', 'TypeScript', 'JavaScript', 'Kotlin', 'PHP', 'Rust'] },
  { id: 'frontend', es: 'Frontend', en: 'Frontend', items: ['React', 'Vue', 'Vite', 'Tailwind', 'HTML', 'CSS'] },
  { id: 'backend', es: 'Backend y datos', en: 'Backend & data', items: ['.NET', 'Laravel', 'NestJS', 'FastAPI', 'Supabase', 'PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'] },
  { id: 'ml', es: 'Machine learning', en: 'Machine learning', items: ['scikit-learn', 'pandas', 'Anaconda', 'Google Colab'] },
  { id: 'tooling', es: 'Herramientas', en: 'Tooling', items: ['Docker', 'Git', 'GitHub'] },
  { id: 'learning', es: 'Aprendiendo', en: 'Learning', items: ['Rust', 'TypeScript', 'React', 'Vue', { es: 'ML avanzado', en: 'Advanced ML' }] },
]);
