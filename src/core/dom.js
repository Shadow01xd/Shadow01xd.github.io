/**
 * Utilidades mínimas para construir DOM sin innerHTML (sin riesgo de inyección).
 */

const SVG_NS = 'http://www.w3.org/2000/svg';

/**
 * Crea un elemento HTML.
 * - `className` se traduce a `class`.
 * - Los atributos null, undefined o false se omiten; true se escribe vacío.
 * - Los hijos pueden ser nodos, textos o listas anidadas; null/false se ignoran.
 *
 * @param {string} tag
 * @param {Record<string, unknown>} [attrs]
 * @param {...unknown} children
 * @returns {HTMLElement}
 */
export function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  setAttributes(node, attrs);
  appendChildren(node, children);
  return node;
}

/**
 * Icono SVG a partir de un símbolo definido en el sprite de index.html.
 * @param {string} id  Nombre del símbolo, sin el prefijo "i-".
 * @param {string} [className]
 */
export function icon(id, className = 'icon') {
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('class', className);
  svg.setAttribute('aria-hidden', 'true');
  const use = document.createElementNS(SVG_NS, 'use');
  use.setAttribute('href', `#i-${id}`);
  svg.append(use);
  return svg;
}

/** @param {string} selector @param {ParentNode} [root] @returns {HTMLElement} */
export function $(selector, root = document) {
  const node = root.querySelector(selector);
  if (!node) throw new Error(`No se encontró el elemento: ${selector}`);
  return /** @type {HTMLElement} */ (node);
}

/** @param {string} selector @param {ParentNode} [root] @returns {HTMLElement[]} */
export const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function setAttributes(node, attrs) {
  for (const [key, value] of Object.entries(attrs)) {
    if (value == null || value === false) continue;
    node.setAttribute(key === 'className' ? 'class' : key, value === true ? '' : String(value));
  }
}

function appendChildren(node, children) {
  for (const child of children.flat(Infinity)) {
    if (child == null || child === false) continue;
    node.append(child instanceof Node ? child : document.createTextNode(String(child)));
  }
}
