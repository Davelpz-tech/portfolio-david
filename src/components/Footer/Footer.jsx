import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import davidlogodark from "../../assets/davidlogodark.svg";
import davidlogo from "../../assets/davidlogo.svg";
import { ThemeContext } from "../../utils/themeContext";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import Brightness5Icon from "@mui/icons-material/Brightness5";

import "./Footer.scss";

const Footer = () => {
  const navRef = useRef();
  const showNav = () => {
    navRef.current.classList.toggle("nav-active");
  };
  const { toggle, toggleFunction } = React.useContext(ThemeContext);
  return (
    <nav className="footer-wrapper">
      <div className="footer-logo-wrapper">
        <Link to="/portfolio-david">
          {toggle ? (
            <img src={davidlogo} className="logo" alt="" />
          ) : (
            <img src={davidlogodark} className="logo" alt="" />
          )}
        </Link>
        <button onClick={toggleFunction}>
          {toggle ? <NightlightRoundIcon /> : <Brightness5Icon />}
        </button>
        <button className="footer-menu-icon" onClick={showNav}>
          <MenuIcon />
        </button>
      </div>

      <div className="footer-nav-items-wrapper">
        <Stack className="left" direction="row">
          <div className="navigation-links">
            <h3>Navigation</h3>
            <Link to="/portfolio-david">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
          </div>
          <div className="personal-links">
            <h3>Personal Links</h3>
            <a href="https://github.com/Davelpz-tech" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/david-lopez-712992207/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <Link to="/contact">Contact</Link>
          </div>
        </Stack>
        <Stack className="right">
          <h3>Contact</h3>
          <p>David Lopez</p>
          <p>davelpz15@gmail.com</p>
          <p>(602)-350-9341</p>
        </Stack>
      </div>

      <div ref={navRef} className="mobile-footer-nav-items-wrapper">
        <Stack className="mobile-left" direction="row">
          <div className="mobile-navigation-links">
            <h3>Navigation</h3>
            <Link to="/portfolio-david" onClick={showNav}>
              Home
            </Link>
            <Link to="/about" onClick={showNav}>
              About
            </Link>
            <Link to="/projects" onClick={showNav}>
              Projects
            </Link>
          </div>
          <div className="mobile-personal-links">
            <h3>Personal Links</h3>
            <a href="https://github.com/Davelpz-tech" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/david-lopez-712992207/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <Link to="/contact" onClick={showNav}>
              Contact
            </Link>
          </div>
        </Stack>
        <Stack className="mobile-right">
          <h3>Contact</h3>
          <p>David Lopez</p>
          <p>davelpz15@gmail.com</p>
          <p>(602)-350-9341</p>
        </Stack>
        <Link to="../../assets/David_CV.pdf" target="_blank" download><button onClick={showNav}>Download CV</button></Link>
        <button onClick={toggleFunction}>
          {toggle ? <NightlightRoundIcon /> : <Brightness5Icon />}
        </button>
        <button className="close-btn" onClick={showNav}>
          <CloseIcon />
        </button>
      </div>

      <div className="line"></div>

      <div className="footer-privacy-info">
        <p>&copy;David Lopez 2022 all rights reserved</p>
        <a href="/portfolio-david">sitemap</a>
      </div>
    </nav>
  );
};

export default Footer;
