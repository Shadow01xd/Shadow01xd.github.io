import { el, icon } from '../core/dom.js';
import { noBreakHyphens } from '../core/format.js';

/**
 * Selección de niveles: una lista de pestañas (una por proyecto) y un panel
 * con el nivel elegido. Sigue el patrón ARIA "tabs" con activación automática.
 *
 * @param {object} options
 * @param {HTMLElement} options.tabList  Contenedor role="tablist".
 * @param {HTMLElement} options.panel    Contenedor role="tabpanel".
 * @param {readonly import('../data/projects.js').Project[]} options.projects
 */
export function createStageSelect({ tabList, panel, projects }) {
  let selectedIndex = 0;
  /** @type {{ lang: 'es' | 'en', t: (key: string) => string } | null} */
  let context = null;

  tabList.addEventListener('keydown', onKeydown);

  /** Vuelve a pintar las pestañas y el panel en el idioma indicado. */
  function render(lang, t) {
    const hadFocus = tabList.contains(document.activeElement);
    context = { lang, t };
    tabList.setAttribute('aria-label', t('projects.list'));
    tabList.replaceChildren(...projects.map((project, index) => renderTab(project, index)));
    renderPanel({ animate: false });
    // Re-pintar las pestañas no debe dejar al usuario de teclado sin foco.
    if (hadFocus) tabList.children[selectedIndex].focus();
  }

  function select(index, { focus = false } = {}) {
    if (index === selectedIndex) return;
    selectedIndex = index;
    for (const [i, tab] of [...tabList.children].entries()) {
      const isSelected = i === index;
      tab.setAttribute('aria-selected', String(isSelected));
      tab.tabIndex = isSelected ? 0 : -1;
      if (isSelected && focus) tab.focus();
    }
    renderPanel({ animate: true });
  }

  function onKeydown(event) {
    const last = projects.length - 1;
    const moves = {
      ArrowRight: selectedIndex === last ? 0 : selectedIndex + 1,
      ArrowDown: selectedIndex === last ? 0 : selectedIndex + 1,
      ArrowLeft: selectedIndex === 0 ? last : selectedIndex - 1,
      ArrowUp: selectedIndex === 0 ? last : selectedIndex - 1,
      Home: 0,
      End: last,
    };
    if (!(event.key in moves)) return;
    event.preventDefault();
    select(moves[event.key], { focus: true });
  }

  function renderTab(project, index) {
    const copy = project[context.lang];
    const isSelected = index === selectedIndex;
    const tab = el('button', {
      type: 'button',
      role: 'tab',
      id: `stage-${project.id}`,
      className: 'stage',
      'data-color': project.color,
      'aria-selected': String(isSelected),
      'aria-controls': panel.id,
      tabindex: isSelected ? 0 : -1,
    },
    icon('pixel-arrow', 'stage-cursor'),
    el('span', { className: 'stage-name' }, project.name),
    el('span', { className: 'stage-score' }, project.score),
    el('span', { className: 'stage-unit' }, copy.scoreUnit),
    el('span', { className: 'stage-tag' }, copy.tag));
    tab.addEventListener('click', () => select(index));
    return tab;
  }

  function renderPanel({ animate }) {
    const project = projects[selectedIndex];
    const copy = project[context.lang];
    const { t } = context;

    panel.dataset.color = project.color;
    panel.setAttribute('aria-labelledby', `stage-${project.id}`);
    panel.replaceChildren(
      el('div', { className: 'level-stage' },
        el('h3', { className: 'level-name' }, project.name),
        el('p', { className: 'level-tag' }, copy.tag),
        el('div', { className: 'level-score' },
          el('span', { className: 'level-score-label' }, t('level.score')),
          el('span', { className: 'level-score-value' }, project.score),
          el('span', { className: 'level-score-caption' }, copy.scoreLabel))),
      el('div', { className: 'level-details' },
        dialogBox(t('level.what'), el('p', {}, copy.what)),
        dialogBox(t('level.part'),
          el('p', {}, copy.part),
          copy.points.length > 0 && el('ul', { className: 'level-points' }, copy.points.map((point) => el('li', {}, point)))),
        dialogBox(t('level.stack'),
          el('ul', { className: 'chips' }, project.stack.map((name) => el('li', { className: 'chip' }, noBreakHyphens(name))))),
        repoLink(project, t)),
    );

    if (animate) replayEntrance(panel);
  }

  return { render };
}

function dialogBox(title, ...content) {
  return el('section', { className: 'dialog' },
    el('h4', { className: 'dialog-title' }, title),
    content);
}

function repoLink(project, t) {
  if (!project.url) return el('p', { className: 'level-private' }, t('level.private'));
  return el('a', { className: 'button button-ghost', href: project.url, target: '_blank', rel: 'noopener' },
    t('level.repo'),
    icon('pixel-arrow'));
}

/** Reinicia la animación de entrada del panel (la cortinilla por pasos). */
function replayEntrance(node) {
  node.classList.remove('is-entering');
  void node.offsetWidth; // fuerza un reflow para que la animación vuelva a empezar
  node.classList.add('is-entering');
}
