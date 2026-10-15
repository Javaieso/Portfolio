/* =========================================================
   Punto de entrada: inicializa cada módulo
   ========================================================= */
import { initTheme } from './modules/theme.js';
import { initMenu } from './modules/menu.js';
import { initI18n, onLanguageChange } from './modules/i18n.js';
import { renderProjects } from './modules/projects.js';

initTheme();
initMenu();

// Los proyectos se vuelven a pintar al cambiar de idioma
onLanguageChange(renderProjects);
initI18n();

document.getElementById('year').textContent = new Date().getFullYear();
