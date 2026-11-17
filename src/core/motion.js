/**
 * Preferencias del usuario sobre movimiento y tipo de puntero.
 * Se consultan en el momento de llamar; los efectos que se activan al cargar
 * (estela, cuenta regresiva, apariciones) leen el valor de ese momento, y el
 * CSS de utilities/motion.css apaga cualquier animación si cambia después.
 */

const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

export const prefersReducedMotion = () => reducedMotionQuery.matches;
export const hasFinePointer = () => finePointerQuery.matches;
