import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <div className="home-main">
        <h3>Web Developer & Designer</h3>
        <Link to="/About">
          <h3>About</h3>
        </Link>
        <h1>Deshan Mclachlan</h1>
      </div>
      <div className="home-projects"></div>
    </main>
  );
};

export default Home;
