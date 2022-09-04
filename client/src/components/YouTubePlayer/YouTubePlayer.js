import React from "react";
import YouTube from "react-youtube";
import { PLAYER_OPTIONS } from "../../utils/consts";

const YouTubePlayer = ({ id, videoId, onEnd }) => {
  return (
    <YouTube
      key={id}
      id={id}
      opts={PLAYER_OPTIONS}
      videoId={videoId}
      onEnd={() => onEnd(id)}
    />
  );
};
export default YouTubePlayer;
