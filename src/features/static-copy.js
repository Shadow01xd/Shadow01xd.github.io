import { $$ } from '../core/dom.js';

/**
 * Traduce el contenido fijo de index.html:
 * - data-i18n="clave"                → textContent
 * - data-i18n-attr="attr:clave;..."  → atributos (aria-label, content…)
 *
 * @param {'es' | 'en'} lang
 * @param {(key: string) => string} t
 */
export function applyStaticCopy(lang, t) {
  document.documentElement.lang = lang;
  document.title = t('meta.title');

  for (const node of $$('[data-i18n]')) node.textContent = t(node.dataset.i18n);

  for (const node of $$('[data-i18n-attr]')) {
    for (const pair of node.dataset.i18nAttr.split(';')) {
      const [attribute, key] = pair.split(':').map((part) => part.trim());
      node.setAttribute(attribute, t(key));
    }
  }
}
