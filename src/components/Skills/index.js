import React from "react";
import {
    SkillsContainer,
    Heading,
    AllSkills,
    SkillElement,
    SkillIcons,
    SkillIcon,
} from "./SkillsElements";
import {
    SiCplusplus,
    SiCss3,
    SiFirebase,
    SiHtml5,
    SiJavascript,
    SiPython,
    SiReact,
    SiStyledcomponents,
    SiBootstrap,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
// import Fade from "react-reveal/Fade";
import { Fade } from "react-awesome-reveal";
import skillElement from "../../images/5.gif";

function Skills() {
    return (
        <SkillsContainer id="skills">
            <Fade direction="left">
                <AllSkills>
                    <Heading>What I do</Heading>

                    <p>Web Developer who wants to explore every tech stack</p>
                    <SkillIcons>
                        <SkillIcon>
                            <SiCplusplus size={50} />
                            <p>C++</p>
                        </SkillIcon>
                        <SkillIcon>
                            <SiPython size={50} />
                            <p>Python</p>
                        </SkillIcon>
                        <SkillIcon>
                            <SiHtml5 size={50} />
                            <p>HTML5</p>
                        </SkillIcon>
                        <SkillIcon>
                            <SiCss3 size={50} />
                            <p>Css3</p>
                        </SkillIcon>
                        <SkillIcon>
                            <SiJavascript size={50} />
                            <p>Javascript</p>
                        </SkillIcon>
                        <SkillIcon>
                            <SiReact size={50} />
                            <p>ReactJS</p>
                        </SkillIcon>
                        <SkillIcon>
                            <FaNode size={50} />
                            <p>Node.JS</p>
                        </SkillIcon>
                        <SkillIcon>
                            <SiStyledcomponents size={50} />
                            <p>Styled-components</p>
                        </SkillIcon>
                        <SkillIcon>
                            <SiBootstrap size={50} />
                            <p>Bootstrap</p>
                        </SkillIcon>
                        <SkillIcon>
                            <SiFirebase size={50} />
                            <p>Firebase</p>
                        </SkillIcon>
                    </SkillIcons>

                    <p>
                        ⚡ Developing high quality Front end / User Interface
                        for web applications. <br />⚡ Intergration of third
                        party services such as Firebase. <br />⚡ Connecting
                        Node.JS to C++.
                    </p>
                </AllSkills>
            </Fade>
            <Fade direction="right">
                <SkillElement>
                    <img src={skillElement} alt="" />
                </SkillElement>
            </Fade>
        </SkillsContainer>
    );
}

export default Skills;
