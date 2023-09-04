import Project from "./Project";
import projects from "../projects-data/projectsdata";

const Projects = () => {
  return (
    <ul>
      {projects.map((project) => {
        return (
          <Project
            key={project.id}
            image={project.images[0].url}
            imageKey={project.images[0].id}
            name={project.name}
            description={project.description}
            yearCompleted={project.yearCompleted}
          />
        );
      })}
    </ul>
  );
};

export default Projects;
