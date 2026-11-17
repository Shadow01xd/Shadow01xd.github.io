import { el } from '../core/dom.js';
import { formatYearMonth } from '../core/format.js';

/**
 * Tabla de certificaciones, con el formato de una tabla de récords.
 * @param {HTMLTableSectionElement} tbody
 * @param {readonly import('../data/certifications.js').Certification[]} certifications
 * @param {'es' | 'en'} lang
 */
export function renderCertifications(tbody, certifications, lang) {
  tbody.replaceChildren(...certifications.map((cert) =>
    el('tr', {},
      el('td', { className: 'scores-date' },
        el('time', { datetime: cert.date }, formatYearMonth(cert.date, lang))),
      el('th', { scope: 'row', className: 'scores-name' }, cert[lang]),
      el('td', { className: 'scores-issuer' }, issuer(cert)))));
}

function issuer(cert) {
  return cert.url
    ? el('a', { href: cert.url, target: '_blank', rel: 'noopener' }, cert.issuer)
    : cert.issuer;
}
