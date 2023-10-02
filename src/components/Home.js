import { Link } from "react-router-dom";
import Projects from "./Projects";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./home.css";
import { useParallax } from "react-scroll-parallax";
import { useState, useEffect } from "react";
import transition from "./utilities/pageTransition";

const Home = () => {
  const [homeMenuToBack, setHomeMenuToBack] = useState(true);

  const controlHome = () => {
    if (window.scrollY > 300) {
      setHomeMenuToBack(false);
    } else {
      setHomeMenuToBack(true);
    }
  };

  const parallaxNav = useParallax({
    startScroll: 0,
    endScroll: 1000,
    opacity: [1, 0],
    translateY: [10, -40],
  });

  const parallaxAbout = useParallax({
    startScroll: 0,
    endScroll: 1000,
    opacity: [1, 0],
    translateY: [10, -40],
  });

  const parallaxTitle = useParallax({
    startScroll: 0,
    endScroll: 1000,
    opacity: [1, 0],
    translateY: [0, 10],
  });

  useEffect(() => {
    window.addEventListener("scroll", controlHome);
    return () => {
      window.removeEventListener("scroll", controlHome);
    };
  });

  return (
    <main className="home">
      <div
        className={`home-fixed home-main home-main-grid ${
          homeMenuToBack ? "home-main--active" : "home-main--inactive"
        }`}
      >
        <h3 ref={parallaxNav.ref} className="home-heading">
          Web Developer & Designer
        </h3>
        <Link to="/About" ref={parallaxAbout.ref} className="home-about-link">
          <h3 className="home-about icon-center">
            About&nbsp; <FaLongArrowAltRight />
          </h3>
        </Link>
        <h1 ref={parallaxTitle.ref} className="home-name">
          Deshan Mclachlan
        </h1>
      </div>
      <div className="home-projects">
        <Projects />
      </div>
    </main>
  );
};

export default transition(Home);
