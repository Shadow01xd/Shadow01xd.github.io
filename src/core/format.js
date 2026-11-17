/**
 * Formatea una fecha AAAA-MM como "nov 2026" / "Nov 2026".
 * @param {string} yearMonth
 * @param {string} lang
 */
export function formatYearMonth(yearMonth, lang) {
  const [year, month] = yearMonth.split('-').map(Number);
  return new Intl.DateTimeFormat(lang, { month: 'short', year: 'numeric' })
    .format(new Date(year, month - 1, 1))
    .replace('.', '');
}

/** Rellena con ceros a la izquierda: pad(4, 2) → "04". */
export const pad = (value, length) => String(value).padStart(length, '0');

/** Evita que los guiones de nombres como "scikit-learn" partan la línea. */
export const noBreakHyphens = (text) => text.replaceAll('-', '‑');
