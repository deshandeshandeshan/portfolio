import { Link } from "react-router-dom";
import Projects from "./Projects";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <main className="home">
      <div className="home-main home-main-grid">
        <h3 className="home-heading">Web Developer & Designer</h3>
        <Link to="/About" className="home-about-link">
          <h3 className="home-about icon-center">
            About&nbsp; <FaLongArrowAltRight />
          </h3>
        </Link>
        <h1 className="home-name">Deshan Mclachlan</h1>
      </div>
      <div className="home-projects">
        <Projects />
      </div>
    </main>
  );
};

export default Home;
