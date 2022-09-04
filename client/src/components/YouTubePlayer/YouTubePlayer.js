import React from "react";
import YouTube from "react-youtube";

const YouTubePlayer = ({ id, videoId, onEnd }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
    },
  };
  return (
    <YouTube
      key={id}
      id={id}
      opts={opts}
      videoId={videoId}
      onEnd={() => onEnd(id)}
    />
  );
};
export default YouTubePlayer;
