import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import { AnimatePresence } from "framer-motion";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/:id" element={<Project />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
