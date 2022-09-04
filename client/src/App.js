import React, { useState, useEffect, useRef } from "react";

import { initSocketEvents } from "./api/socket.io";
import { getVideos, addVideo } from "./api/crudRequests";
import { getVideoDetails } from "./api/youtube";

import Form from "./components/Form/Form";
import PlayListItem from "./components/PlayList/PlayList";
import YouTubePlayer from "./components/YouTubePlayer/YouTubePlayer";

import "./App.css";

function App() {
  const isEffectRan = useRef(false);

  const [playList, setPlayList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    if (!isEffectRan.current) {
      getVideos().then((data) => setPlayList(data));
      initSocketEvents({
        onNewVideo: (data) => setPlayList((prev) => [...prev, data]),
      });
    }
    return () => {
      isEffectRan.current = true;
    };
  }, []);

  useEffect(() => {
    if (!playList.length) {
      setCurrentVideo(null);
    } else if (!currentVideo || playList[0].id !== currentVideo.id) {
      setCurrentVideo(playList[0]);
    }
  }, [playList]);

  const onAdd = (value) => {
    try {
      const url = new URL(value);
      const embedCode = url.searchParams.get("v");
      if (embedCode) {
        getVideoDetails(embedCode).then(({ title, length }) =>
          addVideo({ url: value, embedCode, title, length }).catch((error) =>
            console.error(error)
          )
        );
      }
    } catch (error) {}
  };

  const onEndVideoHandler = (id) => {
    setPlayList((prev) => prev.filter((video) => id !== video.id));
  };

  return (
    <div className="App">
      <Form onAdd={onAdd} />
      <PlayListItem playList={playList} />
      <YouTubePlayer
        id={currentVideo && currentVideo.id}
        videoId={currentVideo ? currentVideo.embedCode : ""}
        onEnd={onEndVideoHandler}
      />
    </div>
  );
}

export default App;
