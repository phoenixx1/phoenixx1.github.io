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
              Kuch to acha aasdsdasdasadsadchKuch to acha aasdsdasdasadsadchKuch
              to acha aasdsdasdasadsadchKuch to acha aasdsdasdasadsadchKuch to
              acha aasdsdasdasadsadchKuch to acha aasdsdasdasadsadcha
            </Subtitle>

            <Button
              href="https://drive.google.com/file/d/1MoOr8IXLwCF1Sh1q2g9CPoYDR4RFsZ3C/view?usp=sharing"
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
