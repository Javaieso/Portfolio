/* =========================================================
   Tema claro / oscuro
   El tema inicial lo aplica el script inline del <head>
   para evitar el parpadeo; aquí solo se gestiona el cambio.
   ========================================================= */
import { STORAGE_KEYS, setItem } from './storage.js';

// Debe coincidir con --bg de cada tema en css/style.css
const THEME_COLORS = {
    dark: '#0b1220',
    light: '#f7f9fc'
};

const root = document.documentElement;

function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
}

export function initTheme() {
    applyTheme(root.getAttribute('data-theme') || 'dark');

    document.getElementById('theme-toggle').addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        setItem(STORAGE_KEYS.theme, next);
    });
}
