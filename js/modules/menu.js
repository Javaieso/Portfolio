/* =========================================================
   Menú desplegable para móvil
   ========================================================= */

// Debe coincidir con el @media (max-width: 820px) de css/style.css
const MOBILE_QUERY = window.matchMedia('(max-width: 820px)');

export function initMenu() {
    const button = document.getElementById('menu-toggle');
    const menu = document.getElementById('nav-menu');

    const setOpen = (open) => {
        menu.classList.toggle('open', open);
        button.setAttribute('aria-expanded', String(open));
    };

    button.addEventListener('click', () => setOpen(!menu.classList.contains('open')));

    // Se cierra al elegir una sección, al pulsar Escape o al pasar a escritorio
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
    MOBILE_QUERY.addEventListener('change', (e) => { if (!e.matches) setOpen(false); });
}
