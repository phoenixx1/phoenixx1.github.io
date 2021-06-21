import React from "react";
import {
  HeroContainer,
  HeroH1,
  HeroP,
  HomeElement,
  HeroContent,
  SocialIcons,
  NavBtn,
  ResumeSection,
} from "./HeroElements";
import Typical from "react-typical";
import Fade from "react-reveal/Fade";
import { BsArrowRightShort } from "react-icons/bs";

import homeElement from "../../images/6.gif";
import github from "../../images/github.png";
import gmail from "../../images/gmail.png";
import linkedin from "../../images/linkedin.png";
import facebook from "../../images/facebook.png";

function HeroSection() {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <Fade right>
          <div>
            <HeroH1>
              Hey!, I'm <br />
              Nishant Saxena
            </HeroH1>
            <HeroP>
              I'm{" "}
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "a Web Developer💻",
                  1000,
                  "a Computer Engineer👨‍💻",
                  1000,
                  "an Open Source Contributor",
                  1000,
                  "a ML enthusiast📖",
                  1000,
                ]}
              />
            </HeroP>
            <SocialIcons>
              <NavBtn href="https://github.com/phoenixx1" target="_blank">
                <img src={github} alt="" />
              </NavBtn>
              <NavBtn
                href="https://www.linkedin.com/in/nishant-saxena-2609/"
                target="_blank"
              >
                <img src={linkedin} alt="" />
              </NavBtn>
              <NavBtn href="mailto:nishantsaxena269@gmail.com" target="_blank">
                <img src={gmail} alt="" />
              </NavBtn>
              <NavBtn
                href="https://www.facebook.com/N.S.T.G.21"
                target="_blank"
              >
                <img src={facebook} alt="" />
              </NavBtn>
            </SocialIcons>

            <ResumeSection>
              <span> See my Resume</span>
              <a
                href="https://drive.google.com/file/d/1a8OEERo6VZbneOW52PRN19rJ34k89_ZI/view?usp=sharing"
                target="__blank"
              >
                <BsArrowRightShort />
              </a>
            </ResumeSection>
          </div>
          <HomeElement src={homeElement} alt="" />
        </Fade>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
