import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import projects from "../projects-data/projectsdata";
import { Link } from "react-router-dom";
import transition from "./utilities/pageTransition";
import "./Project.css";

const Project = () => {
  const [project, setProject] = useState([]);

  const { id } = useParams();

  const filterProjects = (id) => {
    const filteredProject = projects.find((project) => project.id === id);
    setProject(filteredProject);
  };

  useEffect(() => {
    filterProjects(id);
  }, [id]);

  return (
    <div className="project-overlay">
      <Link to="/" className="project-back-button project-link icon-center">
        <FaLongArrowAltLeft /> &nbsp;Back
      </Link>
      <h2 className="project-overlay-title project-padding">
        {project.name} <small>{project.yearCompleted}</small>
      </h2>
      <p className="project-overlay-description project-padding">
        {project.description}
      </p>
      <p className="project-overlay-role project-padding">
        Services: {project.role}
      </p>
      <p className="project-overlay-credits project-padding">
        {project.credits}
      </p>
      <a
        className="project-overlay-visit project-padding icon-center"
        href={project.visitLink}
      >
        {project.visit}&nbsp; <FaLongArrowAltRight />
      </a>
      <div className="project-overlay-images project-padding-top project-overlay-image-grid">
        {project &&
          project.length !== 0 &&
          project.images.map((projectImage) => {
            return (
              <img
                className={`project-overlay-image ${projectImage.class}`}
                src={`${projectImage.url}`}
                alt={project.name}
                key={projectImage.key}
              />
            );
          })}
      </div>
    </div>
  );
};

export default transition(Project);
