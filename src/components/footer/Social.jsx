import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagramSquare,
  FaFacebook,
} from "react-icons/fa";
import { SocialDiv, SocialH4, SocialA } from "./FooterStyle";

const Social = () => {
  return (
    <SocialDiv>
      <SocialH4>Social</SocialH4>
      <SocialA href="https://www.linkedin.com/in/bagriyanik/" target="_blank">
        <FaLinkedin style={{ fontSize: "1.5rem" }} /> Linkedin
      </SocialA>
      <SocialA href="https://github.com/cihanbagriyanik" target="_blank">
        <FaGithub style={{ fontSize: "1.5rem" }} /> GitHub
      </SocialA>
      <SocialA
        href="https://www.instagram.com/cihanbagriyanik/"
        target="_blank"
      >
        <FaInstagramSquare style={{ fontSize: "1.5rem" }} /> Instagram
      </SocialA>
      <SocialA
        href="https://www.facebook.com/profile.php?id=100017748019463&locale=de_DE"
        target="_blank"
      >
        <FaFacebook style={{ fontSize: "1.5rem" }} /> Facebook
      </SocialA>
    </SocialDiv>
  );
};

export default Social;
