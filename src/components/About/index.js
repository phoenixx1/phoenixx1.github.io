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

import profile from "../../images/profile.jpg";
import { Button } from "@material-ui/core";

function About() {
  return (
    <AboutContainer id="about">
      <Heading>ABOUT ME</Heading>

      <AboutWrapper>
        <Column1>
          <Img src={profile} alt="" />
        </Column1>
        <Column2>
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
        </Column2>
      </AboutWrapper>
    </AboutContainer>
  );
}

export default About;
