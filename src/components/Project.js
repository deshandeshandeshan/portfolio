import React, { useState } from "react";
import "./Project.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

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
    <li className="project project-spacing">
      <h2 className="project-title project-padding">{name}</h2>
      <p className="project-year-completed project-padding">{yearCompleted}</p>
      <p className="project-description project-padding">{description}</p>
      <p
        className="project-view-more project-padding"
        onClick={() => {
          setOpen(!open);
        }}
      >
        View more <FaLongArrowAltRight />
      </p>
      <img
        className="project-hero-image"
        src={`${image}`}
        alt={name}
        key={imageKey}
      />
      <img
        className="project-hero-image-2"
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
        <div className="project-overlay-images project-padding-top">
          <img
            className="project-overlay-image"
            src={`${image}`}
            alt={name}
            key={imageKey}
          />
        </div>
      </div>
    </li>
  );
};

export default Project;
