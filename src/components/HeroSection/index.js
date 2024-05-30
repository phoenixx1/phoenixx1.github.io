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
// import Typical from "react-typical";
import Typed from "typed.js";
// import Fade from "react-reveal/Fade";
import { Fade } from "react-awesome-reveal";
import { BsArrowRightShort } from "react-icons/bs";

import homeElement from "../../images/6.gif";
import github from "../../images/github.png";
import gmail from "../../images/gmail.png";
import linkedin from "../../images/linkedin.png";
import facebook from "../../images/facebook.png";

function HeroSection() {
    const TypedComponent = () => {
        const typedElement = useRef(null);

        useEffect(() => {
            const options = {
                strings: [
                    "a Web Developer💻",
                    "a Computer Engineer👨‍💻",
                    "an Open Source Contributor",
                    "a ML enthusiast📖",
                ],
                typeSpeed: 50,
                backSpeed: 50,
                loop: true,
                backDelay: 1000,
            };

            const typed = new Typed(typedElement.current, options);

            // Destroy Typed instance during cleanup to prevent memory leaks
            return () => {
                typed.destroy();
            };
        }, []);

        return <span ref={typedElement}></span>;
    };
    return (
        <HeroContainer id="home">
            <HeroContent>
                <Fade direction="right">
                    <div>
                        <HeroH1>
                            Hey!, I'm <br />
                            Nishant Saxena
                        </HeroH1>
                        <HeroP>
                            I'm <TypedComponent />
                        </HeroP>
                        <SocialIcons>
                            <NavBtn
                                href="https://github.com/phoenixx1"
                                target="_blank"
                            >
                                <img src={github} alt="" />
                            </NavBtn>
                            <NavBtn
                                href="https://www.linkedin.com/in/nishant-saxena-2609/"
                                target="_blank"
                            >
                                <img src={linkedin} alt="" />
                            </NavBtn>
                            <NavBtn
                                href="mailto:nishantsaxena269@gmail.com"
                                target="_blank"
                            >
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
