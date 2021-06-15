import React from "react";
import { SkillsContainer, Heading, AllSkills } from "./SkillsElements";
import {
  SiCplusplus,
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiNodeDotJs,
  SiPython,
  SiReact,
  SiStyledComponents,
  SiBootstrap,
} from "react-icons/si";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

function Skills() {
  return (
    <SkillsContainer id="skills">
      <Heading>
        <Zoom>SKILLS</Zoom>
      </Heading>
      <Fade right>
        <AllSkills>
          <SiCplusplus />
          <SiPython />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiReact />
          <SiNodeDotJs />
          <SiStyledComponents />
          <SiBootstrap />
          <SiFirebase />
        </AllSkills>
      </Fade>
    </SkillsContainer>
  );
}

export default Skills;
