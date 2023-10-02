import { Link } from "react-router-dom";
import AboutImage from "../images/about-image.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./about.css";
import transition from "./utilities/pageTransition";

const About = () => {
  return (
    <main className="about">
      <Link to="/" className="about-selected-works-link">
        <h3 className="about-selected-works icon-center">
          Selected works&nbsp; <FaLongArrowAltRight />
        </h3>
      </Link>
      <h2 className="about-intro about-padding">
        Kia ora! I’m Deshan, a Web Developer and Designer based in Wellington,
        New Zealand.
      </h2>
      <img
        className="about-potrait about-padding"
        src={AboutImage}
        alt="Deshan standing by the ocean"
      />
      <p className="about-more-info about-section-padding">
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris.
      </p>
      <ul className="about-links-list">
        <li className="about-link linkedin">
          <a
            className="link-color"
            href="https://nz.linkedin.com/in/deshan-mclachlan-13b561152"
          >
            LinkedIn
          </a>
        </li>
        <li className="about-link github">
          <a
            className="link-color"
            href="https://github.com/deshandeshandeshan"
          >
            GitHub
          </a>
        </li>
        <li className="about-link instagram">
          <a className="link-color" href="https://www.instagram.com/deshhan/">
            Instagram
          </a>
        </li>
        <li className="about-link email">
          <a className="link-color" href="mailto:deshan.mclachlan0@gmail.com">
            hello@deshan.co.nz
          </a>
        </li>
      </ul>
    </main>
  );
};

export default transition(About);
