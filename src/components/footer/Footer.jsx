import React from "react";
import Social from "./Social";
import { FooterMainDiv, FooterTextDiv } from "./FooterStyle";
import Services from "./Services";

const Footer = () => {
  return (
    <div>
    <hr />
      <FooterMainDiv>
        <FooterTextDiv>
          <p>Based in Munich, working worldwide.</p>
          <a href="/contact">Get in touch</a>
        </FooterTextDiv>

        <Social />

        <Services />
      </FooterMainDiv>

      <div className="text-center pb-1">
        <hr />
        <p>
          Copyright © {new Date().getFullYear()} Cihan Bagriyanik | Powered by
          Cihan Bagriyanik
        </p>
      </div>
    </div>
  );
};

export default Footer;
