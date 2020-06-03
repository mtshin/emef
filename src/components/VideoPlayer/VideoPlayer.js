import React from "react";
// responsive player css
import "assets/css/videoPlayer.css";

// core components
import ReactPlayer from "react-player";
// eslint-disable-next-line react/prop-types
const VideoPlayer = ({ url, width, height, controls, style }) => {
  return (
    <div
      className="player-wrapper"
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <ReactPlayer
        className="react-player"
        url={url}
        width={width}
        height={height}
        controls={controls}
        style={style}
      />
    </div>
  );
};

export default VideoPlayer;
