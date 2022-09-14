import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";

import "./Music.scss";

function Player(props) {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <>
      <div className="music-player-wrapper">
        <audio src="" ref={audioElement}></audio>
        <PlayerDetails song={props.songs[props.currentSongIndex]} />
        <PlayerControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          SkipSong={SkipSong}
        />
      </div>

      <div className="nextsong-wrapper">
        <div className="next-img-wrapper">
          <img
            src={props.songs[props.nextSongIndex].img_src}
            alt={props.songs[props.nextSongIndex].title}
          />
        </div>
        <div className="nextsong-details">
          <p>next song:</p>
          <b>{props.songs[props.nextSongIndex].title} </b>
          <b>by {props.songs[props.nextSongIndex].artist}</b>
        </div>
      </div>
    </>
  );
}

export default Player;
