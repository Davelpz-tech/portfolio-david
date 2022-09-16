import React from "react";
import { projectsData } from "../Projects/projectsData";
import "./Cards.scss";

const CardsLimited = () => {
  return (
    <>
      {projectsData.slice(0, 3).map((data) => {
        return (
          <div className="card-wrapper" key={data.id}>
            <div className="top">
              <img src={data.thumbnail} alt="" />
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </div>
            <div className="sidebyside-btn-container">
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <button>
                    See Deployment
                  </button>
                </a>
                <a href={data.sourcecode} target="_blank" rel="noopener noreferrer">
                  <button className="outline">
                    Source Code
                  </button>
                </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardsLimited;
