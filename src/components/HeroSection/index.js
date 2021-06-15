import React from "react";
import {
  HeroBg,
  HeroContainer,
  HeroH1,
  HeroP,
  VideoBg,
  HeroContent,
} from "./HeroElements";
import Video from "../../videos/video.mp4";
import Typical from "react-typical";
import Fade from "react-reveal/Fade";

function HeroSection() {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <Fade right>
          <HeroH1>Hi, I'm Nishant Saxena</HeroH1>
          <HeroP>
            I'm a{" "}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Web Developer 💻",
                1000,
                "Computer Engineer 👨‍💻",
                1000,
                "Open Source Contributor ✔️",
                1000,
                "ML enthusiast 📖",
                1000,
              ]}
            />
          </HeroP>
        </Fade>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
