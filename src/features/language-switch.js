import { $$ } from '../core/dom.js';
import { isLang } from '../i18n/index.js';

/**
 * Conecta los botones [data-lang] con el cambio de idioma.
 * @param {(lang: 'es' | 'en') => void} onChange
 * @returns {(lang: 'es' | 'en') => void} Marca el botón del idioma activo.
 */
export function bindLanguageSwitch(onChange) {
  const buttons = $$('[data-lang]');

  for (const button of buttons) {
    button.addEventListener('click', () => {
      const { lang } = button.dataset;
      if (isLang(lang)) onChange(lang);
    });
  }

  return (activeLang) => {
    for (const button of buttons) {
      button.setAttribute('aria-pressed', String(button.dataset.lang === activeLang));
    }
  };
}
