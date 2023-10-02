import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <ScrollToTop>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
