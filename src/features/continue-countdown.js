import { prefersReducedMotion } from '../core/motion.js';

const START = 9;
const TICK_MS = 1000;

/**
 * Cuenta regresiva de "¿Continuar?" (9 → 0, y vuelve a empezar).
 * Solo corre mientras está en pantalla y nunca con movimiento reducido.
 * @param {HTMLElement} node
 */
export function startContinueCountdown(node) {
  node.textContent = String(START);
  if (prefersReducedMotion() || !('IntersectionObserver' in window)) return;

  let value = START;
  let timer = 0;

  const tick = () => {
    value = value === 0 ? START : value - 1;
    node.textContent = String(value);
  };

  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !timer) {
      timer = window.setInterval(tick, TICK_MS);
    } else if (!entry.isIntersecting && timer) {
      window.clearInterval(timer);
      timer = 0;
    }
  }).observe(node);
}
