import "./Project.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const ProjectPreview = ({ images, name, yearCompleted, role }) => {
  return (
    <li className="project project-spacing">
      <h3 className="project-title">
        {name} <small>{yearCompleted}</small>
      </h3>
      <p className="project-role project-padding">{role}</p>
      <div className="project-view-more">
        <p className="project-link project-padding icon-center">
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
    </li>
  );
};

export default ProjectPreview;
