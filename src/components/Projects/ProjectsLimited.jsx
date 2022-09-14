import React from "react";
import CardsLimited from "../Cards/CardsLimited";
import { Typography } from "@mui/material";
import "./Projects.scss";

const ProjectsLimited = () => {
  return (
    <section className="projects-wrapper">
      <Typography className="projects-section-title">
        <h3>Projects I've worked on!</h3>
        <div className="projects-line"></div>
        <p>
          These are a few of my prized creations! I love designing beautiful
          looking applications with spectacular mobile responsiveness.
          <br />
          Click the links below and I hope you enjoy them.
        </p>
      </Typography>
      <div className="project-cards-wrapper">
        <CardsLimited />
      </div>
    </section>
  );
};

export default ProjectsLimited;