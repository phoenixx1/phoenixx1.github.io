import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience } from "./Data";
import { ExperienceContainer, Heading } from "./ExperienceElements";
import Zoom from "react-reveal/Zoom";

function Experience() {
  return (
    <ExperienceContainer id="experience">
      <Heading>
        <Zoom>EXPERIENCE & EDUCATION</Zoom>
      </Heading>
      <VerticalTimeline>
        {experience.map((values) => (
          <VerticalTimelineElement
            className={`vertical-timeline-element--${values.type}`}
            contentStyle={
              values.bckgrnd ? { background: "#ee7e05", color: "#fff" } : {}
            }
            contentArrowStyle={
              values.bckgrnd ? { borderRight: "7px solid  #ee7e05" } : {}
            }
            date={values.date}
            iconStyle={{ background: "#333333", color: "#fff" }}
            icon={values.icon}
          >
            <h3 className="vertical-timeline-element-title">{values.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {values.subtitle}
            </h4>
            <p>{values.desc}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </ExperienceContainer>
  );
}

export default Experience;
