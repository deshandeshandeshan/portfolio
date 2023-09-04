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
    <li>
      <h2>{name}</h2>
      <p>{yearCompleted}</p>
      <p>{description}</p>
      <p
        onClick={() => {
          setOpen(!open);
        }}
      >
        See more
      </p>
      <img src={`${image}`} alt={name} key={imageKey} />
      <div
        className={`project-overlay ${
          open ? "project-overlay--active" : "project-overlay--hidden"
        }`}
        style={{
          opacity: open ? "1" : "0",
        }}
      >
        <p
          onClick={() => {
            setOpen(!open);
          }}
        >
          Back
        </p>
        <h2>{name}</h2>
        <p>{yearCompleted}</p>
        <p>{description}</p>
        <p>{role}</p>
        <p>{credits}</p>
        <a href={visitLink}>{visit}</a>
        <img src={`${image}`} alt={name} key={imageKey} />
      </div>
    </li>
  );
};

export default Project;
