import React from "react";
import MusicPlayer from "../Player/MusicPlayer";
import { projectsData } from "../Projects/projectsData";
import { Link } from "react-router-dom";
import "./Cards.scss";

const Cards = () => {
  return (
    <>
      {projectsData.map((data) => {
        return (
          <div className="card-wrapper" key={data.id}>
            <div className="top">
              <img src={data.thumbnail} alt="" />
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </div>
            <div className="sidebyside-btn-container">
              <Link to={data.link} target="_blank" rel="noopener noreferrer">
                <button>
                  See Deployment
                </button>
              </Link>
              <Link to={data.sourcecode} target="_blank" rel="noopener noreferrer">
                <button className="outline">
                  Source Code
                </button>
              </Link>
            </div>
          </div>
        );
      })}
      <div className="card-wrapper">
        <MusicPlayer />
      </div>
    </>
  );
};

export default Cards;