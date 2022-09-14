import React, { useState, useEffect } from "react";
import Player from "./Player";

const MusicPlayer = () => {
  const [songs, setSongs] = useState([
    {
      title: "Six Forty Seven",
      artist: "Instupendo",
      track: "1",
      img_src: "https://source.unsplash.com/srQukngaeOM",
      src: ""
    },
    {
      title: "French inhale",
      artist: "[bsd.u]",
      track: "2",
      img_src: "https://source.unsplash.com/T9_ap0TXMP8",
      src: ""
    },
    {
      title: "Champagne cola",
      artist: "Chuckee",
      track: "3",
      img_src: "https://source.unsplash.com/aCSjQvSStyY",
      src: ""
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <>
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </>
  );
};

export default MusicPlayer;
