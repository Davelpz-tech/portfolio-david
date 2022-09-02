import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Footer.css";

const Footer = () => {
  const navRef = useRef();
  const showNav = () => {
    navRef.current.classList.toggle("nav-active");
  };

  return (
    <nav className="footer-wrapper">
      <div className="footer-logo-wrapper">
        <button className="footer-menu-icon" onClick={showNav}>
          <MenuIcon />
        </button>
        <h1>
          david<span className="logo-span">Lopez</span>
        </h1>
      </div>

      <div className="footer-nav-items-wrapper">
        <Stack className="left" direction="row">
          <div className="navigation-links">
            <h3>Navigation</h3>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Projects</Link>
          </div>
          <div className="personal-links">
            <h3>Personal Links</h3>
            <Link to="/">GitHub</Link>
            <Link to="/">LinkedIn</Link>
            <Link to="/">Contact</Link>
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
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Projects</Link>
          </div>
          <div className="mobile-personal-links">
            <h3>Personal Links</h3>
            <Link to="/">GitHub</Link>
            <Link to="/">LinkedIn</Link>
            <Link to="/">Contact</Link>
          </div>
        </Stack>
        <Stack className="mobile-right">
          <h3>Contact</h3>
          <p>David Lopez</p>
          <p>davelpz15@gmail.com</p>
          <p>(602)-350-9341</p>
        </Stack>
        <button>Download CV</button>
        <button className="close-btn" onClick={showNav}>
          <CloseIcon />
        </button>
      </div>

      <div className="line"></div>

      <div className="footer-privacy-info">
        <p>&copy;David Lopez 2022 all rights reserved</p>
        <a href="/">sitemap</a>
      </div>
    </nav>
  );
};

export default Footer;