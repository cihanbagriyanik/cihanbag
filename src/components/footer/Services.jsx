import React from "react";
import { ServicesA, ServicesDiv, ServicesH4 } from "./FooterStyle";

const Services = () => {
  return (
    <div>
      <ServicesDiv>
        <ServicesH4>Services</ServicesH4>
        {/* <ul> */}
          <li>
            <ServicesA href="/services">Frontend Development</ServicesA>
          </li>
          <li>
            <ServicesA href="/services">Backend Development</ServicesA>
          </li>
          <li>
            <ServicesA href="/services">Responsive Design</ServicesA>
          </li>
        {/* </ul> */}
      </ServicesDiv>
    </div>
  );
};

export default Services;
