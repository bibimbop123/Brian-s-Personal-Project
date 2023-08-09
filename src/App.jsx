import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Nav } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Nav />
      <h1> Brian's Project </h1>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<ContactMe/>} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
