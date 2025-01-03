const projects = [
    {
      title: "CRUD App",
      description: "A user management system with futuristic interfaces and functionality.",
      liveDemo: "#",
      repo: "#",
    },
    {
      title: "Weather App",
      description: "A sleek, futuristic weather application using OpenWeather API.",
      liveDemo: "#",
      repo: "#",
    },
    {
      title: "To-Do List",
      description: "An advanced task management app with a futuristic touch and local storage.",
      liveDemo: "#",
      repo: "#",
    },
  ];
  
  const projectContainer = document.getElementById("project-container");
  
  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.liveDemo}" target="_blank">Live Demo</a> | 
      <a href="${project.repo}" target="_blank">GitHub Repo</a>
    `;
    projectContainer.appendChild(card);
  });
  
  const themeToggle = document.getElementById("theme-toggle");
  
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
    