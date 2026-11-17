import es from './es.js';
import en from './en.js';
import { readStorage, writeStorage } from '../core/storage.js';

/** @typedef {'es' | 'en'} Lang */

const DICTIONARIES = Object.freeze({ es, en });
const STORAGE_KEY = 'lang';
const DEFAULT_LANG = 'es';

/** @param {unknown} value @returns {value is Lang} */
export const isLang = (value) => Object.hasOwn(DICTIONARIES, value);

/** Idioma guardado, o el del navegador si no hay ninguno. @returns {Lang} */
export function detectLang() {
  const saved = readStorage(STORAGE_KEY);
  if (isLang(saved)) return saved;
  const browser = (navigator.language || DEFAULT_LANG).toLowerCase();
  return browser.startsWith('en') ? 'en' : DEFAULT_LANG;
}

/** @param {Lang} lang */
export const rememberLang = (lang) => writeStorage(STORAGE_KEY, lang);

/**
 * Devuelve la función de traducción para un idioma.
 * Una clave inexistente se devuelve tal cual, para que el fallo sea visible.
 * @param {Lang} lang
 * @returns {(key: string) => string}
 */
export function translator(lang) {
  const dictionary = DICTIONARIES[lang];
  return (key) => dictionary[key] ?? key;
}

/**
 * Elige el texto de un objeto bilingüe { es, en } o de un texto plano.
 * @param {string | { es: string, en: string }} value
 * @param {Lang} lang
 */
export const localize = (value, lang) => (typeof value === 'string' ? value : value[lang]);
