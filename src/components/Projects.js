import react from "react";

function Project({ project }) {
  const tech = project.tech.map((p) => {
    return <li className="tech-entry">{p}</li>;
  });
  return (
    <div className="project-card">
      <div className="project-logo">
        <a href={project.link} className="project-link">
          <img src={project.logo} alt="project logo" className="project-img" />
        </a>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <ul class="tech-used">{tech}</ul>
        <p class="card-discription">{project.discription}</p>
      </div>
    </div>
  );
}

function Projects(props) {
  const projects = props.projects.map((pro) => {
    return <Project project={pro} />;
  });

  return (
    <section className="projects" id="Projects">
      <h1>Projects</h1>
      <div className="project-container">{projects}</div>
    </section>
  );
}

export default Projects;
