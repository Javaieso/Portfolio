document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('project-form');
  const container = document.getElementById('projects-container');

  // Proyectos iniciales (con tu repositorio real)
  const defaultProjects = [
    {
      title: "Entornos de Desarrollo",
      description: "Proyecto en Java para la práctica de estructuras básicas, control de versiones y gestión funcional de datos.",
      link: "https://github.com/Javaieso/Entornos"
    },
    {
      title: "Plataforma TFG (En Desarrollo)",
      description: "Aplicación Web Full Stack para la gestión de partidas de rol personalizadas y módulos interactivos.",
      link: "https://github.com/Javaieso"
    }
  ];

  // Obtener proyectos guardados en LocalStorage o cargar por defecto
  let savedProjects = JSON.parse(localStorage.getItem('my_projects'));
  if (!savedProjects || savedProjects.length === 0) {
    savedProjects = defaultProjects;
    localStorage.setItem('my_projects', JSON.stringify(savedProjects));
  }

  // Pintar todos los proyectos
  savedProjects.forEach(renderProject);

  // Guardar nuevos proyectos desde el formulario
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const newProject = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        link: document.getElementById('link').value
      };

      savedProjects.unshift(newProject);
      localStorage.setItem('my_projects', JSON.stringify(savedProjects));

      container.innerHTML = '';
      savedProjects.forEach(renderProject);
      form.reset();
    });
  }

  function renderProject(project) {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <div>
        <h3>${escapeHTML(project.title)}</h3>
        <p>${escapeHTML(project.description)}</p>
      </div>
      <a href="${escapeHTML(project.link)}" target="_blank" rel="noopener" class="project-link">
        <i class="fab fa-github"></i> Ver en GitHub ↗
      </a>
    `;
    container.appendChild(card);
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }
});