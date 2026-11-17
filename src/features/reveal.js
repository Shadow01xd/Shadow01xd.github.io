import { $$ } from '../core/dom.js';
import { prefersReducedMotion } from '../core/motion.js';

/**
 * Aparición al hacer scroll. El contenido es visible por defecto: solo se
 * ocultan (.is-pending) los elementos .reveal que siguen bajo el borde de la
 * pantalla, y solo si el navegador puede animarlos.
 *
 * @returns {{ arm: () => void }} `arm` registra los .reveal nuevos (p. ej. tras re-renderizar).
 */
export function createReveal() {
  if (prefersReducedMotion() || !('IntersectionObserver' in window)) return { arm() {} };

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.remove('is-pending');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -8% 0px' });

  function arm() {
    for (const node of $$('.reveal:not([data-reveal-armed])')) {
      node.dataset.revealArmed = '';
      if (node.getBoundingClientRect().top <= window.innerHeight) continue;
      node.classList.add('is-pending');
      observer.observe(node);
    }
  }

  return { arm };
}
