import React, { useState } from "react";
import "./Project.css";

const Project = ({
  image,
  imageKey,
  name,
  yearCompleted,
  description,
  role,
  credits,
  visit,
  visitLink,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="project">
      <h2 className="project-title">{name}</h2>
      <p className="project-year-completed">{yearCompleted}</p>
      <p className="project-description">{description}</p>
      <p
        className="project-view-more"
        onClick={() => {
          setOpen(!open);
        }}
      >
        View more
      </p>
      <img
        className="project-hero-image"
        src={`${image}`}
        alt={name}
        key={imageKey}
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
          className="project-back-button"
          onClick={() => {
            setOpen(!open);
          }}
        >
          Back
        </p>
        <h2 className="project-overlay-name">{name}</h2>
        <p className="project-overlay-year-completed">{yearCompleted}</p>
        <p className="project-overlay-description">{description}</p>
        <p className="project-overlay-role">{role}</p>
        <p className="project-overlay-credits">{credits}</p>
        <a className="project-overlay-visit" href={visitLink}>
          {visit}
        </a>
        <img
          className="project-overlay-image"
          src={`${image}`}
          alt={name}
          key={imageKey}
        />
      </div>
    </li>
  );
};

export default Project;
