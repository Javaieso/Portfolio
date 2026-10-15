/* =========================================================
   Tarjetas de proyectos (los datos están en data/projects.js)
   ========================================================= */
import { PROJECTS } from '../../data/projects.js';
import { t, pick } from './i18n.js';

const SVG_NS = 'http://www.w3.org/2000/svg';

// Crea un elemento con clase y texto opcionales
function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
}

// Icono del sprite definido al principio de index.html
function icon(id) {
    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('aria-hidden', 'true');
    const use = document.createElementNS(SVG_NS, 'use');
    use.setAttribute('href', `#icon-${id}`);
    svg.appendChild(use);
    return svg;
}

function createLink(href, label, iconId, variant) {
    const link = el('a', `btn btn-sm ${variant}`);
    link.href = href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.append(icon(iconId), label);
    return link;
}

function createCard(project) {
    const card = el('article', 'card project-card');

    const head = el('div', 'project-head');
    head.appendChild(el('h3', '', pick(project.title)));
    if (project.course) head.appendChild(el('span', 'project-course', project.course));

    const tags = el('ul', 'tags');
    (project.tags ?? []).forEach((tag) => tags.appendChild(el('li', '', tag)));

    const links = el('div', 'project-links');
    if (project.demo) links.appendChild(createLink(project.demo, t('projects.demo'), 'external', 'btn-primary'));
    if (project.code) links.appendChild(createLink(project.code, t('projects.code'), 'code', 'btn-ghost'));

    card.append(head, el('p', '', pick(project.description)), tags, links);
    return card;
}

export function renderProjects() {
    const grid = document.getElementById('projects-grid');

    if (PROJECTS.length === 0) {
        grid.replaceChildren(el('p', 'empty-msg', t('projects.empty')));
        return;
    }
    grid.replaceChildren(...PROJECTS.map(createCard));
}
