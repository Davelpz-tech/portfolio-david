import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import "./Intro.scss";

const Intro = () => {
  return (
    <>
      <section className="intro-wrapper">
        <div className="toplayer">
          <div className="lg-greeting">
            <Typography className="greeting">
              <h3 style={{ color: "white" }}>Hello, my name is</h3>
              <h1 style={{ color: "white" }}>
                DAVID <span className="accented-text">LOPEZ</span>
              </h1>
            </Typography>
            <Typography className="intro-snippet">
              <h1 style={{ color: "white" }}>Full Stack Web Developer</h1>
              <p style={{ color: "white" }}>
                Im a University of Arizona certified MERN Stack Developer who is passionate about
                Front End Web Development!
              </p>
            </Typography>
          </div>

          <div className="xs-mobile-greeting">
            <Typography className="greeting">
              <h3>Hello, my name is</h3>
              <h1>
                DAVID <span className="accented-text">LOPEZ</span>
              </h1>
            </Typography>
            <Typography className="intro-snippet">
              <h1>Full Stack Web Developer</h1>
              <p>
                Im a University of Arizona certified MERN Stack Developer who is passionate about
                Front End Web Development!
              </p>
            </Typography>
          </div>
          <div className="sidebyside-btn-container">
            <Link to="/about">
              <button>About Me</button>
            </Link>
            <Link to="../../assets/David_CV.pdf" target="_blank" download><button className="outline" download>Download CV</button></Link>
          </div>
        </div>
        <div className="filter"></div>
      </section>
    </>
  );
};

export default Intro;
