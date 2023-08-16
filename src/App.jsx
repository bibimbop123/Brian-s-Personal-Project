import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Nav } from "./components/Navbar";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Analytics } from "@vercel/analytics/react";
import { inject } from "@vercel/analytics/react";

function App() {
  inject();
  return (
    <>
      <div className="Application">
        <Nav />
        <h1 id="head"> Brian's Project </h1>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <br />
        <br />
        <br />
      </div>
      <Analytics />
    </>
  );
}

export default App;
