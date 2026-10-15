/* =========================================================
   LISTA DE PROYECTOS
   ---------------------------------------------------------
   Para añadir un trabajo, copia un bloque { ... } y pégalo
   al principio de la lista (así aparece el primero).

   title        -> título en español (es) e inglés (en)
   description  -> descripción en español (es) e inglés (en)
   course       -> etiqueta corta (ej: "1º DAM", "2º DAM", "TFG")
   tags         -> tecnologías usadas
   code         -> enlace al repositorio (opcional)
   demo         -> enlace a la web funcionando (opcional)
   ========================================================= */

export const PROJECTS = [
    {
        title: {
            es: "Primer trabajo web",
            en: "First web project"
        },
        description: {
            es: "Ejercicio de maquetación web: estructura HTML, estilos CSS y categorías de productos.",
            en: "Web layout exercise: HTML structure, CSS styling and product categories."
        },
        course: "1º DAM",
        tags: ["HTML5", "CSS3"],
        code: "https://github.com/Javaieso/PrimerTrabajoB-sico1DAM",
        demo: "https://javaieso.github.io/PrimerTrabajoB-sico1DAM/"
    }
];
