import React, { useState, useEffect } from "react";
import projects from "../projects-data/projectsdata";
import "./Project.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Project = ({
  images,
  name,
  yearCompleted,
  description,
  role,
  credits,
  visit,
  visitLink,
}) => {
  const [open, setOpen] = useState(false);

  const removeScrollWhenOpen = () => {
    if (open === true) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  };

  useEffect(() => {
    removeScrollWhenOpen();
  });

  return (
    <li className="project project-spacing">
      <h2 className="project-title project-padding">{name}</h2>
      <p className="project-year-completed project-padding">{yearCompleted}</p>
      <p className="project-description project-padding">{description}</p>
      <p
        className="project-view-more project-link project-padding"
        onClick={() => {
          setOpen(!open);
        }}
      >
        View more <FaLongArrowAltRight />
      </p>
      <img
        className="project-hero-image"
        src={`${images[0].url}`}
        alt={name}
        key={images[0].key}
      />
      <img
        className="project-hero-image-2"
        src={`${images[0].url}`}
        alt={name}
        key={images[0].key}
      />
      <div
        className={`project-overlay ${
          open ? "project-overlay--active" : "project-overlay--hidden"
        }`}
        style={{
          opacity: open ? "1" : "0",
        }}
      >
        <p
          className="project-back-button project-link"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <FaLongArrowAltLeft /> Back
        </p>
        <h2 className="project-overlay-title project-padding">{name}</h2>
        <p className="project-overlay-year-completed project-padding">
          {yearCompleted}
        </p>
        <p className="project-overlay-description project-padding">
          {description}
        </p>
        <p className="project-overlay-role project-padding">{role}</p>
        <p className="project-overlay-credits project-padding">{credits}</p>
        <a className="project-overlay-visit project-padding" href={visitLink}>
          {visit} <FaLongArrowAltRight />
        </a>
        <div className="project-overlay-images project-padding-top project-overlay-image-grid">
          {images.map((projectImage) => {
            return (
              <img
                className={`project-overlay-image ${projectImage.class}`}
                src={`${projectImage.url}`}
                alt={name}
                key={projectImage.key}
              />
            );
          })}
        </div>
      </div>
    </li>
  );
};

export default Project;
