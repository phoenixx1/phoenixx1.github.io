import React from "react";
import {
  SkillsContainer,
  Heading,
  AllSkills,
  SkillElement,
  SkillIcons,
  SkillIcon,
  SubPart,
} from "./SkillsElements";
import {
  SiCplusplus,
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiStyledComponents,
  SiBootstrap,
  SiPostman,
  SiC,
  SiGit,
  SiMongodb,
  SiHeroku,
  SiRedux,
} from "react-icons/si";
import { DiMysql, DiSass } from "react-icons/di";

import { FaNode } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import skillElement from "../../images/5.gif";

function Skills() {
  return (
    <SkillsContainer id="skills">
      <Fade left>
        <AllSkills>
          <Heading>What I do</Heading>

          <p>Web Developer who wants to explore every tech stack</p>
          <SkillIcons>
            Languages
            <SubPart>
              <SkillIcon>
                <SiC className="icon" />
                <p>C</p>
              </SkillIcon>
              <SkillIcon>
                <SiCplusplus className="icon" />
                <p>C++</p>
              </SkillIcon>
              <SkillIcon>
                <SiPython className="icon" />
                <p>Python</p>
              </SkillIcon>
              <SkillIcon>
                <SiJavascript className="icon" />
                <p>Javascript</p>
              </SkillIcon>
            </SubPart>
            Frontend Tools
            <SubPart>
              <SkillIcon>
                <SiHtml5 className="icon" />
                <p>HTML5</p>
              </SkillIcon>
              <SkillIcon>
                <SiCss3 className="icon" />
                <p>Css3</p>
              </SkillIcon>
              <SkillIcon>
                <SiReact className="icon" />
                <p>ReactJS</p>
              </SkillIcon>
              <SkillIcon>
                <SiStyledComponents className="icon" />
                <p>Styled-components</p>
              </SkillIcon>
              <SkillIcon>
                <DiSass className="icon" />
                <p>Sass</p>
              </SkillIcon>
              <SkillIcon>
                <SiRedux className="icon" />
                <p>Redux</p>
              </SkillIcon>
              <SkillIcon>
                <SiBootstrap className="icon" />
                <p>Bootstrap</p>
              </SkillIcon>
            </SubPart>
            Backend Tools
            <SubPart>
              <SkillIcon>
                <FaNode className="icon" />
                <p>Node.JS</p>
              </SkillIcon>
              <SkillIcon>
                <SiFirebase className="icon" />
                <p>Firebase</p>
              </SkillIcon>
              <SkillIcon>
                <SiHeroku className="icon" />
                <p>Heroku</p>
              </SkillIcon>
              <SkillIcon>
                <DiMysql className="icon" />
                <p>MySQL</p>
              </SkillIcon>
              <SkillIcon>
                <SiMongodb className="icon" />
                <p>MongoDB</p>
              </SkillIcon>
              <SkillIcon>
                <SiPostman className="icon" />
                <p>Postman</p>
              </SkillIcon>
              <SkillIcon>
                <SiGit className="icon" />
                <p>Git</p>
              </SkillIcon>
            </SubPart>
          </SkillIcons>

          <p>
            ⚡ Developing high quality Front end / User Interface for web
            applications. <br />⚡ Intergration of third party services such as
            Firebase. <br />⚡ Connecting Node.JS to C++.
          </p>
        </AllSkills>
      </Fade>
      <Fade right>
        <SkillElement>
          <img src={skillElement} alt="" />
        </SkillElement>
      </Fade>
    </SkillsContainer>
  );
}

export default Skills;
