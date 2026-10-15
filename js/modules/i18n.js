/* =========================================================
   Idiomas (ES / EN)
   ========================================================= */
import { TRANSLATIONS } from '../../data/translations.js';
import { STORAGE_KEYS, getItem, setItem } from './storage.js';

const DEFAULT_LANG = 'es';
const listeners = [];

let currentLang = detectLanguage();

// Idioma guardado > idioma del navegador > español
function detectLanguage() {
    const saved = getItem(STORAGE_KEYS.lang);
    if (saved in TRANSLATIONS) return saved;

    const browser = (navigator.language || '').slice(0, 2).toLowerCase();
    return browser in TRANSLATIONS ? browser : DEFAULT_LANG;
}

/** Texto de una clave en el idioma actual. */
export function t(key) {
    return TRANSLATIONS[currentLang][key] ?? TRANSLATIONS[DEFAULT_LANG][key] ?? key;
}

/** Elige el idioma actual de un valor { es, en } (o lo devuelve tal cual si es texto). */
export function pick(value) {
    return typeof value === 'string' ? value : value[currentLang] ?? value[DEFAULT_LANG];
}

/** Registra una función que se ejecuta cada vez que cambia el idioma. */
export function onLanguageChange(callback) {
    listeners.push(callback);
}

function applyLanguage() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
        el.setAttribute('aria-label', t(el.dataset.i18nAria));
    });

    listeners.forEach((callback) => callback(currentLang));
}

export function initI18n() {
    const button = document.getElementById('lang-toggle');
    const languages = Object.keys(TRANSLATIONS);

    // El botón muestra el idioma al que se va a cambiar
    const nextLang = () => languages[(languages.indexOf(currentLang) + 1) % languages.length];
    const updateButton = () => { button.textContent = nextLang().toUpperCase(); };

    button.addEventListener('click', () => {
        currentLang = nextLang();
        setItem(STORAGE_KEYS.lang, currentLang);
        applyLanguage();
        updateButton();
    });

    applyLanguage();
    updateButton();
}
