import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineFork } from "react-icons/ai";

import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  SocialIcons,
} from "./NavbarElements";
import Logo from "../../images/logo.png";

function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo onClick={toggleHome} src={Logo} />

        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>

        <NavMenu>
          <NavItem>
            <NavLinks
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="experience"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Experience
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Skills
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Projects
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Contact Me
            </NavLinks>
          </NavItem>
        </NavMenu>

        <SocialIcons>
          <NavBtn href="https://github.com/phoenixx1" target="_blank">
            <FaGithub />
          </NavBtn>
          <NavBtn
            href="https://www.linkedin.com/in/nishant-saxena-2609/"
            target="_blank"
          >
            <FaLinkedin />
          </NavBtn>
          <NavBtn
            href="https://github.com/phoenixx1/phoenixx1.github.io"
            target="_blank"
          >
            <AiOutlineFork />
          </NavBtn>
        </SocialIcons>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
