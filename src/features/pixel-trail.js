import { hasFinePointer, prefersReducedMotion } from '../core/motion.js';

const CELL = 8;          // tamaño de la cuadrícula en px
const LIFETIME_MS = 420; // lo que tarda un píxel en apagarse
const MAX_PIXELS = 48;

/**
 * Estela de píxeles que deja el puntero y se apaga en menos de medio segundo.
 * Solo con ratón o trackpad y sin movimiento reducido.
 * @param {readonly string[]} colors  Colores (CSS) por los que va rotando.
 */
export function startPixelTrail(colors) {
  if (prefersReducedMotion() || !hasFinePointer() || colors.length === 0) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'pixel-trail';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.append(canvas);

  const ctx = canvas.getContext('2d');
  /** @type {{ x: number, y: number, born: number, color: string }[]} */
  const pixels = [];
  let colorIndex = 0;
  let lastCell = '';
  let frame = 0;

  const resize = () => {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.round(window.innerWidth * ratio);
    canvas.height = Math.round(window.innerHeight * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  const draw = (now) => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    while (pixels.length && now - pixels[0].born > LIFETIME_MS) pixels.shift();
    for (const pixel of pixels) {
      const life = 1 - (now - pixel.born) / LIFETIME_MS;
      ctx.globalAlpha = Math.round(life * 4) / 4; // se apaga por pasos, como en una pantalla CRT
      ctx.fillStyle = pixel.color;
      ctx.fillRect(pixel.x, pixel.y, CELL - 2, CELL - 2);
    }
    frame = pixels.length ? requestAnimationFrame(draw) : 0;
  };

  const onMove = (event) => {
    const x = Math.floor(event.clientX / CELL) * CELL;
    const y = Math.floor(event.clientY / CELL) * CELL;
    const cell = `${x},${y}`;
    if (cell === lastCell) return;
    lastCell = cell;
    pixels.push({ x, y, born: performance.now(), color: colors[colorIndex] });
    colorIndex = (colorIndex + 1) % colors.length;
    if (pixels.length > MAX_PIXELS) pixels.shift();
    if (!frame) frame = requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pointermove', onMove, { passive: true });
}
