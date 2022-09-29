import React, { useRef } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import davidlogo from "../../assets/davidlogo.svg";
import davidlogodark from "../../assets/davidlogodark.svg";
import { ThemeContext } from "../../utils/themeContext";

import "./Navbar.scss";

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("nav-active");
  };
  const { toggle, toggleFunction } = React.useContext(ThemeContext);

  return (
    <div className="navbar-wrapper">
      <div className="nav-logo-container">
        <Link to="/portfolio-david">
          {toggle ? (
            <img src={davidlogo} className="logo" alt="lightmode logo" />
          ) : (
            <img src={davidlogodark} className="logo" alt="darkmode logo" />
          )}
        </Link>
        <button className="nav-menu-icon" onClick={showNavbar}>
          <MenuIcon />
        </button>
      </div>

      <div className="nav-items">
        <Link to="/portfolio-david">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <div className="sidebyside-btn-container">
          <button onClick={toggleFunction}>
            {toggle ? <NightlightRoundIcon /> : <Brightness5Icon />}
          </button>
          <a href="https://drive.google.com/uc?export=download&id=1LlWmvr01YIeOrCep_j6qig6CpHSUnvpr" target="_blank" download><button className="outline" download>Download CV</button></a>
        </div>
      </div>

      <div ref={navRef} className="mobile-nav-items">
        <Link to="/portfolio-david" onClick={showNavbar}>
          Home
        </Link>
        <Link to="/about" onClick={showNavbar}>
          About
        </Link>
        <Link to="/projects" onClick={showNavbar}>
          Projects
        </Link>
        <div className="vertical-btn-container">
          <button onClick={toggleFunction}>
            {toggle ? <NightlightRoundIcon /> : <Brightness5Icon />}
          </button>
          <Link to="../../assets/David_CV.pdf" target="_blank" download><button onClick={showNavbar} className="outline" download>Download CV</button></Link>
        </div>
        <button className="close-btn" onClick={showNavbar}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
