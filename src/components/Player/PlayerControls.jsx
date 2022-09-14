import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import CircleIcon from "@mui/icons-material/Circle";
import PauseIcon from "@mui/icons-material/Pause";

function PlayerControls(props) {
  return (
    <div className="music-player-controls">
      <div className="progress-bar">
        <CircleIcon className="progress-thumb" />
      </div>
      <div className="controls">
        <SkipPreviousIcon onClick={() => props.SkipSong(false)} />
        {props.isPlaying ? (
          <PauseIcon onClick={() => props.setIsPlaying(!props.isPlaying)} />
        ) : (
          <PlayArrowIcon onClick={() => props.setIsPlaying(!props.isPlaying)} />
        )}
        <SkipNextIcon onClick={() => props.SkipSong()} />
      </div>
    </div>
  );
}

export default PlayerControls;
