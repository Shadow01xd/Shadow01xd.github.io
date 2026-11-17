/**
 * Punto de entrada. Conecta datos, traducciones, componentes y efectos.
 *
 *   data/        contenido (proyectos, herramientas, certificaciones, perfil)
 *   i18n/        textos de la interfaz en es / en
 *   core/        utilidades sin estado (DOM, formato, almacenamiento, movimiento)
 *   components/  piezas que pintan datos en el DOM
 *   features/    comportamientos de página (idioma, apariciones, efectos)
 */
import { $ } from './core/dom.js';
import { pad } from './core/format.js';
import { PROJECTS } from './data/projects.js';
import { TOOL_GROUPS } from './data/tools.js';
import { CERTIFICATIONS } from './data/certifications.js';
import { detectLang, rememberLang, translator } from './i18n/index.js';
import { createStageSelect } from './components/stage-select.js';
import { renderCertifications } from './components/certifications.js';
import { renderInventory } from './components/inventory.js';
import { applyStaticCopy } from './features/static-copy.js';
import { bindLanguageSwitch } from './features/language-switch.js';
import { createReveal } from './features/reveal.js';
import { startContinueCountdown } from './features/continue-countdown.js';
import { startPixelTrail } from './features/pixel-trail.js';

const stageSelect = createStageSelect({
  tabList: $('#stage-list'),
  panel: $('#level-panel'),
  projects: PROJECTS,
});
const reveal = createReveal();
const markActiveLang = bindLanguageSwitch(setLang);

/** @param {'es' | 'en'} lang */
function setLang(lang) {
  const t = translator(lang);
  applyStaticCopy(lang, t);
  stageSelect.render(lang, t);
  renderCertifications($('#cert-rows'), CERTIFICATIONS, lang);
  renderInventory($('#inventory'), TOOL_GROUPS, lang);
  markActiveLang(lang);
  rememberLang(lang);
  reveal.arm();
}

function arcadeColors() {
  const styles = getComputedStyle(document.documentElement);
  return ['--coin', '--pink', '--cyan', '--lime'].map((name) => styles.getPropertyValue(name).trim()).filter(Boolean);
}

$('#year').textContent = String(new Date().getFullYear());
$('#stage-count').textContent = pad(PROJECTS.length, 2);
setLang(detectLang());
startContinueCountdown($('#countdown'));
startPixelTrail(arcadeColors());
