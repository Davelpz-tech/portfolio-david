import React, { useRef } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("nav-active");
    console.log("click")
  };

  return (
    <div className="navbar-wrapper">
      <div className="nav-logo-container">
        <h1>
          david<span className="logo-span">Lopez</span>
        </h1>
        <button className="nav-menu-icon" onClick={showNavbar}>
          <MenuIcon />
        </button>
      </div>

      <div className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Projects</Link>
        <div className="sidebyside-btn-container">
          <button>Contact</button>
          <button className="outline">Download CV</button>
        </div>
      </div>

      <div ref={navRef} className="mobile-nav-items">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Projects</Link>
        <div className="vertical-btn-container">
          <button>Contact</button>
          <button className="outline">Download CV</button>
        </div>
        <button className="close-btn" onClick={showNavbar}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;