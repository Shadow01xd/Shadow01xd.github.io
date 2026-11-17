import { el } from '../core/dom.js';
import { noBreakHyphens } from '../core/format.js';
import { localize } from '../i18n/index.js';

/**
 * Herramientas como el inventario de un juego: un solo panel, una fila por
 * área, y cada herramienta en su propia casilla.
 * @param {HTMLElement} root
 * @param {readonly import('../data/tools.js').ToolGroup[]} groups
 * @param {'es' | 'en'} lang
 */
export function renderInventory(root, groups, lang) {
  root.replaceChildren(...groups.map((group) =>
    el('div', { className: 'inventory-row', 'data-group': group.id },
      el('h3', { className: 'inventory-label' }, group[lang]),
      el('ul', { className: 'inventory-slots' },
        group.items.map((item) => el('li', { className: 'slot' }, noBreakHyphens(localize(item, lang))))))));
}
