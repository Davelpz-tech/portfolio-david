import React from "react";
import { Intro, About, ProjectsLimited, Contact } from "../../components";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home-wrapper">
      <Intro />
      <About />
      <ProjectsLimited />
      <Contact />
    </div>
  );
};

export default HomePage;