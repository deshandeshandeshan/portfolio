import { Link } from "react-router-dom";
import AboutImage from "../images/about-image.jpg";

const About = () => {
  return (
    <main className="about">
      <Link to="/">
        <h3 className="about-selected-works-link">Selected works</h3>
      </Link>
      <h2 className="about-intro">
        Kia ora! I’m Deshan, a Web Developer and Designer based in Wellington,
        New Zealand.
      </h2>
      <img
        className="about-potrait"
        src={AboutImage}
        alt="Deshan standing by the ocean"
      />
      <p className="about-more-info">
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris.
      </p>
      <ul className="about-links-list">
        <li className="about-link linkedin">
          <a href="https://nz.linkedin.com/in/deshan-mclachlan-13b561152">
            LinkedIn
          </a>
        </li>
        <li className="about-link instagram">
          <a href="https://www.instagram.com/deshhan/">Instagram</a>
        </li>
        <li className="about-link email">
          <a href="mailto:deshan.mclachlan0@gmail.com">hello@deshan.co.nz</a>
        </li>
      </ul>
    </main>
  );
};

export default About;
