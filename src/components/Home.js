import { Link } from "react-router-dom";
import Projects from "./Projects";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./home.css";
import { useParallax } from "react-scroll-parallax";
import { useState, useEffect, Suspense } from "react";
import transition from "./utilities/pageTransition";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import D from "./D";

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
    translateY: [0, -45],
  });

  const parallaxAbout = useParallax({
    startScroll: 0,
    endScroll: 1000,
    opacity: [1, 0],
    translateY: [0, -45],
  });

  const parallaxTitle = useParallax({
    startScroll: 0,
    endScroll: 1000,
    opacity: [1, 0],
    translateY: [0, 10],
  });

  const parallaxSelectedWork = useParallax({
    startScroll: 0,
    endScroll: 1000,
    opacity: [1, 0],
    translateY: [0, 90],
  });

  const parallaxSelectedWorkSub = useParallax({
    startScroll: 0,
    endScroll: 1000,
    opacity: [1, 0],
    translateY: [0, 190],
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
        <p ref={parallaxNav.ref} className="home-heading text-gray">
          Web Developer & Designer
        </p>
        <Link to="/About" ref={parallaxAbout.ref} className="home-about-link">
          <p className="home-about icon-center">
            About&nbsp; <FaLongArrowAltRight />
          </p>
        </Link>
        <Canvas className="threed-model">
          <OrbitControls enableRotate={true} enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={10} />
          <directionalLight position={[2, -5, -2]} intensity={10} />
          <Suspense fallback={null}>
            <D />
          </Suspense>
        </Canvas>
        <h1 ref={parallaxTitle.ref} className="home-name">
          Deshan Mclachlan
        </h1>
        <h2 ref={parallaxSelectedWork.ref} className="home-selected-work">
          Selected work
        </h2>
        <h3
          ref={parallaxSelectedWorkSub.ref}
          className="home-selected-work-sub text-gray"
        >
          23' - present
        </h3>
      </div>
      <div className="home-projects">
        <Projects />
      </div>
    </main>
  );
};

export default transition(Home);
