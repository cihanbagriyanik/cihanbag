import { DarkButton, Logo, LogoA } from "./MyNavBarStyle";

import React, { useState } from "react";

import "./_navigation.scss";
import "./_mixins.scss";

import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

const MyNavbar = () => {
  const [day, setDay] = useState(false);

  return (
    <div
      className=" w-100 d-flex justify-content-between fixed-top"
      style={{ backgroundColor: "#050872" }}
    >
      <Logo>
        <LogoA href="/">
          {"<"}
          <span>Cihan</span>
          {"Bag/>"}
        </LogoA>
      </Logo>

      <div>
        <div>
          <DarkButton onClick={() => setDay((i) => !i)}>
            {day ? <IoIosSunny size={35} /> : <FaMoon size={25} />}
          </DarkButton>
        </div>
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />
          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>
          <div className="navigation__background">&nbsp;</div>
          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="/" className="navigation__link">
                  Home
                </a>
              </li>
              <li className="navigation__item">
                <a href="/about" className="navigation__link">
                  About
                </a>
              </li>
              <li className="navigation__item">
                <a href="/portfolio" className="navigation__link">
                  Portfolio
                </a>
              </li>
              <li className="navigation__item">
                <a href="/services" className="navigation__link">
                  Services
                </a>
              </li>
              <li className="navigation__item">
                <a href="contact" className="navigation__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MyNavbar;
