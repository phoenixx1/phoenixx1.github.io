import React from "react";
import {
  Column1,
  Column2,
  Heading,
  Img,
  AboutContainer,
  AboutWrapper,
  Subtitle,
} from "./AboutElements";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import profile from "../../images/profile.jpg";
import { Button } from "@material-ui/core";

function About() {
  return (
    <AboutContainer id="about">
      <Heading>
        <Zoom>ABOUT ME</Zoom>
      </Heading>

      <AboutWrapper>
        <Column1>
          <Fade top>
            <Img src={profile} alt="" />
          </Fade>
        </Column1>
        <Column2>
          <Fade bottom>
            <Subtitle>
              I am a Computer Engineer with an affinity for C++ and ReactJS, a
              passionate person when it comes to working and my goal is to
              expand my skills and knowledge in Web Development, I am a hard
              worker and eager to learn to make a valuable asset in any team.
            </Subtitle>

            <Button
              href="https://drive.google.com/file/d/1a8OEERo6VZbneOW52PRN19rJ34k89_ZI/view?usp=sharing"
              target="__blank"
            >
              RESUME
            </Button>
          </Fade>
        </Column2>
      </AboutWrapper>
    </AboutContainer>
  );
}

export default About;
