/**
 * Acceso seguro a localStorage: en modo privado o con el almacenamiento
 * bloqueado, leer devuelve null y escribir no hace nada.
 */

/** @param {string} key @returns {string | null} */
export function readStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

/** @param {string} key @param {string} value */
export function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* Sin almacenamiento: la preferencia simplemente no se recuerda. */
  }
}
