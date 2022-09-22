import React from "react";
import certification from "../../assets/certificate.jpg";

import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="aboutpage-wrapper">
      <div className="experience-wrapper">
        <h1>Experience</h1>
        <p>
          I've been a Web Developer for multiple companies over the last 4
          years!
        </p>
        <div className="work-experience-items">
          <div className="experience-item">
            <h3>Sun City West</h3>
            <h4>Lead Web Developer / Web Master</h4>
            <p>July 25th, 2022 - Current</p>
          </div>
          <div className="experience-item">
            <h3>Endurance International Group</h3>
            <h4>Web Designer / Professional Service</h4>
            <p>May 7th, 2020 - June 26th 2021</p>
          </div>
          <div className="experience-item">
            <h3>Endurance International Group</h3>
            <h4>Web Advisor / DNS Technical Support Specialist</h4>
            <p>June 14th, 2019 - June 14th, 2020</p>
          </div>
        </div>
      </div>

      <div className="skills-wrapper">
        <h1>Skills</h1>
        <ul>
          <li>Full Stack (MERN)</li>
          <li>Agile & Waterfall Development</li>
          <li>RESTful APIs</li>
          <li>Git Version Control</li>
          <li>CRUD Applications</li>
        </ul>
      </div>

      <div className="languages-wrapper">
        <h1>Languages</h1>
        <p>JavaScript</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>Python</p>
        <p>Java</p>
        <p>C++</p>
      </div>

      <div className="education-wrapper">
        <h1>Education</h1>
        <div className="education-item">
          <h3>University of Arizona</h3>
          <h4>Full Stack Web Development</h4>
          <p>2019 - 2022</p>
        </div>
        <div className="education-item">
          <h3>Harvard Online Course</h3>
          <h4>CS50</h4>
          <p>2020 - 2022</p>
        </div>
        <div
          className="diploma-wrapper"
          style={{
            height: "150px",
            width: "250px",
            borderRadius: "5px",
            overflow: "hidden"
          }}
        >
          <img
            src={certification}
            style={{ height: "150px" , width: "250px" }}
            alt="Full Stack Certificate from University of Arizona"
          />
        </div>
      </div>

      <div className="achievements-wrapper">
        <h1>Achievements</h1>
        <div className="achievement-items-wrapper">
          <div className="achievement-item">
            <h3>Promotion</h3>
            <h4>Web Advisor I Web Advisor II</h4>
            <p>Tasked with resolving complex web hosting issues</p>
          </div>
          <div className="achievement-item">
            <h3>Promotion</h3>
            <h4>Web Advisor II Professional Service Team</h4>
            <p>Web Designer / Website Builder</p>
          </div>
          <div className="achievement-item">
            <h3>Graduation</h3>
            <h4>MERN Stack Certification</h4>
            <p>Certified understanding of Web Technologies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
