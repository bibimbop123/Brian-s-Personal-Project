import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Nav } from "./components/Navbar";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Analytics } from "@vercel/analytics/react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyB-5Z5Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z",
    authDomain: "briankim-portfolio.firebaseapp.com",
    projectId: "briankim-portfolio",
    storageBucket: "briankim-portfolio.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:123456789",
    measurementId: "G-123456789",
  };

  initializeApp(firebaseConfig);
  const analytics = getAnalytics();
  return (
    <div className="Application">
      <Nav />
      <Analytics id="briankim-portfolio" />
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
      <Analytics />
    </div>
  );
}

export default App;
