import { Link } from "react-router-dom";
import AboutImage from "../images/about-image.jpg";

const About = () => {
  return (
    <main className="about">
      <Link to="/">
        <h3>Selected works</h3>
      </Link>
      <h2>
        Kia ora! I’m Deshan, a Web Developer and Designer based in Wellington,
        New Zealand.
      </h2>
      <img src={AboutImage} alt="Deshan standing by the ocean" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris.
      </p>
      <ul>
        <li>
          <a href="https://nz.linkedin.com/in/deshan-mclachlan-13b561152">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/deshhan/">Instagram</a>
        </li>
        <li>
          <a href="mailto:deshan.mclachlan0@gmail.com">hello@deshan.co.nz</a>
        </li>
      </ul>
    </main>
  );
};

export default About;
