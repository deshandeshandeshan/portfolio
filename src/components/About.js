import { Link } from "react-router-dom";
import AboutImage from "../images/about-image.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./about.css";
import transition from "./utilities/pageTransition";

const About = () => {
  return (
    <main className="about">
      <Link to="/" className="about-selected-works-link">
        <p className="about-selected-works icon-center">
          Selected work&nbsp; <FaLongArrowAltRight />
        </p>
      </Link>
      <h2 className="about-intro about-padding">
        Kia ora! I’m Deshan, a Web Developer and Designer based in Wellington,
        New Zealand. Please get in touch regarding any projects you would like
        to discuss or collaboration opportunities.
      </h2>
      <img
        className="about-potrait about-padding"
        src={AboutImage}
        alt="Deshan standing by the ocean"
      />
      {/* <p className="about-more-info about-section-padding">
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris.
      </p> */}
      <ul className="about-education list-padding">
        <h3 className="list-header-padding">Education:</h3>
        <li className="list-item-padding">
          <p>
            2022 - 2023
            <br />
            Developers Institute
            <br />
            Distance education
            <br />
            Whangārei, New Zealand
            <br />
            Diploma in Web Development
          </p>
        </li>
        <li className="list-item-padding">
          <p>
            2015 - 2019
            <br />
            Massey University
            <br />
            Wellington, New Zealand.
            <br />
            Bachelor of Design with Honours
            <br />
            Spatial Design.
          </p>
        </li>
      </ul>
      <ul className="about-experience list-padding">
        <h3 className="list-header-padding">Experience:</h3>
        <li className="list-item-padding">
          <p>
            2022 - current
            <br />
            Good as Gold
            <br />
            Retail assistant
          </p>
        </li>
        <li className="list-item-padding">
          <p>
            2023 - current
            <br />
            Freelance
            <br />
            Web developer and Designer
          </p>
        </li>
      </ul>
      <ul className="about-links-list">
        <h3 className="about-link-header list-header-padding">Links:</h3>
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
          <a className="link-color" href="mailto:hello@deshanmclachlan.com">
            hello@deshanmclachlan.com
          </a>
        </li>
      </ul>
    </main>
  );
};

export default transition(About);
