import React, { useState, useEffect } from "react";
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
      <h3 className="project-title">
        {name} <small>{yearCompleted}</small>
      </h3>
      <p className="project-role project-padding">{role}</p>
      <div className="project-view-more">
        <p
          className="project-link project-padding icon-center"
          onClick={() => {
            setOpen(!open);
          }}
        >
          View more&nbsp; <FaLongArrowAltRight />
        </p>
      </div>
      <img
        className="project-hero-image"
        src={`${images[0].url}`}
        alt={name}
        key={images[0].key}
      />
      <img
        className="project-hero-image-2"
        src={`${images[2].url}`}
        alt={name}
        key={images[2].key}
      />
      <div
        className={`project-overlay ${
          open ? "project-overlay--active" : "project-overlay--hidden"
        }`}
      >
        <p
          className="project-back-button project-link icon-center"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <FaLongArrowAltLeft /> &nbsp;Back
        </p>
        <h2 className="project-overlay-title project-padding">
          {name} <small>{yearCompleted}</small>
        </h2>
        <p className="project-overlay-description project-padding">
          {description}
        </p>
        <p className="project-overlay-role project-padding">Services: {role}</p>
        <p className="project-overlay-credits project-padding">{credits}</p>
        <a
          className="project-overlay-visit project-padding icon-center"
          href={visitLink}
        >
          {visit}&nbsp; <FaLongArrowAltRight />
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
