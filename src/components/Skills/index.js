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

function Skills() {
  return (
    <SkillsContainer id="skills">
      <Heading>SKILLS</Heading>
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
    </SkillsContainer>
  );
}

export default Skills;
