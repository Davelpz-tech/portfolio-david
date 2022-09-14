import React from "react";

import "./Music.scss";

function PlayerDetails(props) {
  return (
    <div className="music-player-details">
      <img src={props.song.img_src} alt="" />
      <h1>{props.song.title}</h1>
      <p>{props.song.artist}</p>
    </div>
  );
}

export default PlayerDetails;
