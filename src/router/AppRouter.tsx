import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MyNavbar from "../components/navbar/MyNavbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
