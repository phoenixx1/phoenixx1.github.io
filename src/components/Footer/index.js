import React from "react";
import { FooterContainer, NavBtn } from "./FooterElements";
import github from "../../images/github.png";
import gmail from "../../images/gmail.png";
import instagram from "../../images/instagram.png";
import linkedin from "../../images/linkedin.png";
import facebook from "../../images/facebook.png";

function Footer() {
  return (
    <FooterContainer>
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
      <NavBtn href="https://www.instagram.com/nishant_21_/" target="_blank">
        <img src={instagram} alt="" />
      </NavBtn>
      <NavBtn href="https://www.facebook.com/N.S.T.G.21" target="_blank">
        <img src={facebook} alt="" />
      </NavBtn>
    </FooterContainer>
  );
}

export default Footer;
