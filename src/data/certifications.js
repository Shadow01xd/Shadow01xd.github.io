/**
 * Certificaciones, de la más reciente a la más antigua.
 * `date` usa el formato AAAA-MM. `url` es opcional (null = sin enlace).
 *
 * @typedef {{ date: string, es: string, en: string, issuer: string, url: string|null }} Certification
 */

/** @type {readonly Certification[]} */
export const CERTIFICATIONS = Object.freeze([
  { date: '2026-11', es: 'Fundamentos de Arquitectura de Software', en: 'Software Architecture Fundamentals', issuer: 'Platzi', url: null },
  { date: '2026-09', es: 'Business Intelligence y Deep Research con IA', en: 'Business Intelligence & Deep Research with AI', issuer: 'Platzi', url: null },
  { date: '2026-01', es: 'Curso Profesional de Scrum', en: 'Professional Scrum Course', issuer: 'Platzi', url: null },
  { date: '2026-01', es: 'Design Thinking', en: 'Design Thinking', issuer: 'Platzi', url: null },
  { date: '2026-01', es: 'Glosario de Diseño de Producto', en: 'Product Design Glossary', issuer: 'Platzi', url: null },
  { date: '2026-01', es: 'Habilidades Blandas para el Desarrollo Profesional', en: 'Soft Skills for Professional Development', issuer: 'Platzi', url: null },
  { date: '2025-05', es: 'Scrum Fundamentals Certified (SFC)', en: 'Scrum Fundamentals Certified (SFC)', issuer: 'SCRUMstudy', url: null },
  { date: '2023-05', es: 'Webinar: IA en la Educación', en: 'Webinar: AI in Education', issuer: 'SIGUE-e', url: null },
]);
