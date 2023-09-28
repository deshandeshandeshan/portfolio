import Project from "./Project";
import projects from "../projects-data/projectsdata";

const Projects = () => {
  return (
    <ul className="projects-list">
      {projects.map((project) => {
        return (
          <Project
            key={project.id}
            images={project.images}
            name={project.name}
            description={project.description}
            yearCompleted={project.yearCompleted}
            role={project.role}
            credits={project.credits}
            visit={project.visit}
            visitLink={project.visitLink}
          />
        );
      })}
    </ul>
  );
};

export default Projects;
