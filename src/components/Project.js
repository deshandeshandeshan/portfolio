import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useParams } from "react-router";

const Project = ({
  name,
  images,
  yearCompleted,
  description,
  role,
  credits,
  visitLink,
  visit,
}) => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <p className="project-back-button project-link icon-center">
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
      {/* <div className="project-overlay-images project-padding-top project-overlay-image-grid">
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
      </div> */}
    </div>
  );
};

export default Project;
