import React from "react";
import { SlEnvolope } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import foto from "../../assets/img/LinkedInFoto.png"

import {
  HomeMainDiv,
  HomeTopTextDiv,
  TopTextPDiv,
  TopTextP,
  DivA,
  TopTextFirtsH1,
  TopTextSecondH1,
  TopImg,
} from "./HomeStyle";
import AboutMe from "../../components/about/AboutMe";
import Skills from "../../components/about/Skills";
import MyExperience from "../../components/about/MyExperience";

const Home = () => {
  return (
    <HomeMainDiv>
      <HomeTopTextDiv>
        <TopTextPDiv>
          <TopTextP className="  ">
             <span>Hello,</span> my name is
          </TopTextP>

          <TopTextFirtsH1>Cihan Bagriyanik</TopTextFirtsH1>
          <TopTextSecondH1>Web Developer</TopTextSecondH1>

          <DivA>
            <a href="mailto:cihanbagriyanikde@gmail.com">
              <SlEnvolope /> cihanbagriyanikde@gmail.com
            </a>
            <a className="" href="tel:+4917622791071">
              <FaPhoneAlt /> +49 176 2279 10 71
            </a>
          </DivA>
        </TopTextPDiv>

        <TopImg>
          <img src={foto} alt="" />
        </TopImg>
      </HomeTopTextDiv>

      <AboutMe />

      {/* <div className="row" > */}
      {/* <div className="col-12" > */}
      <Skills />
      {/* </div> */}
      {/* </div> */}
      {/* <div className="col-6" > */}
      <MyExperience />
      {/* </div> */}
    </HomeMainDiv>
  );
};

export default Home;
