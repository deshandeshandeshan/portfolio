import { Link } from "react-router-dom";
import Projects from "./Projects";

const Home = () => {
  return (
    <main className="home">
      <div className="home-main">
        <h3 className="home-heading">Web Developer & Designer</h3>
        <Link to="/About">
          <h3 className="home-about-link">About</h3>
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
