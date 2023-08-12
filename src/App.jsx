import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Nav } from "./components/Navbar";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import workIcon from "./assets/workIcon.svg";
import schoolIcon from "./assets/schoolIcon.svg";
import { timelineElements } from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function App() {
  let workIconStyles = { background: "#06D6A0", height: "25%" };
  let schoolIconStyles = { background: "#f9c74f", height: "25%" };
  return (
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
      <div id="timeline">
        <h1 className="title">Timeline</h1>
        <VerticalTimeline>
          {timelineElements.map((element, index) => {
            console.log("element", element);
            let isWorkIcon = element.icon.hasOwnProperty("WorkIcon");
            let showButton =
              element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";
            return (
              <VerticalTimelineElement
                key={index} // Use the index as the key
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={
                  isWorkIcon ? (
                    <img src={workIcon} alt="Work Icon" />
                  ) : (
                    <img src={schoolIcon} alt="School Icon" />
                  )
                }
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">{element.description}</p>
                {showButton && (
                  <a
                    className={`button ${
                      isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                    href="/"
                  >
                    {element.buttonText}
                  </a>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;
