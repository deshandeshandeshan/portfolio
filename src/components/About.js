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
        New Zealand. Please get in touch regarding any projects or
        collaborations you would like to discuss.
      </h2>
      <img
        className="about-potrait about-padding"
        src={AboutImage}
        alt="Deshan standing by the ocean"
      />
      <div className="about-info">
        <ul className="about-education list-padding about-info-grid">
          <p className="list-header-padding about-list-header">Education</p>
          <li className="list-item-padding about-list-item-grid">
            <p className="about-list-item-1">2022 - 2023</p>
            <p className="about-list-item-2">Developers Institute</p>
            <p className="about-list-item-3">Diploma in Web Development</p>
          </li>
          <li className="list-item-padding about-list-item-grid">
            <p className="about-list-item-1">2015 - 2019</p>
            <p className="about-list-item-2">Massey University</p>
            <p className="about-list-item-3">
              Bachelor of Spatial Design with Honours
            </p>
          </li>
        </ul>
        <ul className="about-experience list-padding about-info-grid">
          <p className="list-header-padding about-list-header">Experience</p>
          <li className="list-item-padding about-list-item-grid">
            <p className="about-list-item-1">2022 - current</p>
            <p className="about-list-item-2">Good as Gold</p>
            <p className="about-list-item-3">Retail assistant</p>
          </li>
          <li className="list-item-padding about-list-item-grid">
            <p className="about-list-item-1">2023 - current</p>
            <p className="about-list-item-2">Freelance</p>
            <p className="about-list-item-3">Web developer and Designer</p>
          </li>
        </ul>
        <ul className="about-links-list about-info-grid">
          <p className="about-link-header about-list-header list-header-padding ">
            Links
          </p>
          <li className="about-link linkedin about-list-item-grid">
            <a
              className="link-color about-list-item-1"
              href="https://nz.linkedin.com/in/deshan-mclachlan-13b561152"
            >
              LinkedIn
            </a>
          </li>
          <li className="about-link github about-list-item-grid">
            <a
              className="link-color about-list-item-1"
              href="https://github.com/deshandeshandeshan"
            >
              GitHub
            </a>
          </li>
          <li className="about-link arena about-list-item-grid">
            <a
              className="link-color about-list-item-1"
              href="https://www.are.na/deshan-mclachlan"
            >
              Are.na
            </a>
          </li>
          <li className="about-link instagram about-list-item-grid">
            <a
              className="link-color about-list-item-1"
              href="https://www.instagram.com/deshhan/"
            >
              Instagram
            </a>
          </li>
          <li className="about-link email about-list-item-grid">
            <a
              className="link-color about-list-item-1"
              href="mailto:hello@deshanmclachlan.com"
            >
              hello@deshanmclachlan.com
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default transition(About);
