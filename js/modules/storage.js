/* =========================================================
   Acceso seguro a localStorage
   (puede fallar en modo privado o con cookies bloqueadas)
   ========================================================= */

export const STORAGE_KEYS = {
    theme: 'theme',
    lang: 'lang'
};

export function getItem(key) {
    try {
        return localStorage.getItem(key);
    } catch {
        return null;
    }
}

export function setItem(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch {
        // Sin almacenamiento: la preferencia solo dura esta visita
    }
}
