import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineElements } from "../timelineElements.jsx";
import workIcon from "../assets/workIcon.svg";
import schoolIcon from "../assets/schoolIcon.svg";

export function Timeline() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  return (
    <div id="timeline">
      <h1 className="title">Timeline of Brian's Life </h1>
      <br />
      <br />
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
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <br />
      <br />
    </div>
  );
}
