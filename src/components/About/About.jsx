import React, { useRef } from "react";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

import "./About.scss";

const About = () => {
  const modalRef = useRef();
  const showModal = () => {
    modalRef.current.classList.toggle("modal-active");
  };

  return (
    <section className="about-wrapper">
      <div className="about-info">
        <h3>A Little bit about me...</h3>
        <img
          className="mobile-about-img"
          src="https://source.unsplash.com/kpGj50PWAG0"
          alt="guy at computer coding"
        />
        <Typography>
          <h3>I've been a Full Stack Web Developer for many years now.</h3>
          <p>
            And I love every last bit of what I do. I started my Journey with
            the <span>University of Arizona</span> where I learned Full Stack
            Web Development. I excelled in my program and fell in love with
            Front End Web Development. I've always been an artistic person so it
            was only natural that I made sure I gave every webpage I built the
            best design I could conjure.
          </p>
        </Typography>
        <div className="sidebyside-btn-container">
          <button onClick={showModal}>Read More</button>
        </div>

        <div ref={modalRef} className="modal-wrapper">
          <div className="modal-content">
            <button onClick={showModal} className="close-btn">
              <CloseIcon />
            </button>
            <h3>A little more about me...</h3>
            <p>
              So you actually wanted to know more about me? I'm flattered! But
              unfortunately I don't have much else to say other than, "if you're
              reading this and you're interested in working with me please click
              one of the buttons below and reach out to me or see my
              professional experiences on this resume."
            </p>
            <div className="sidebyside-btn-container">
              <Link to="/contact">
                <button onClick={showModal}>Contact</button>
              </Link>
              <Link to="../../assets/David_CV.pdf" target="_blank" download>
                <button onClick={showModal} className="outline">Download CV</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img
        className="desktop-about-img"
        src="https://source.unsplash.com/kpGj50PWAG0"
        alt="guy at computer coding"
      />
    </section>
  );
};

export default About;
