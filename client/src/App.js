import React, { useState, useEffect, useRef } from "react";

import { initSocketEvents } from "./api/socket.io";
import { getVideos, addVideo, deleteVideo } from "./api/crudRequests";
import { getVideoDetails } from "./api/youtube";

import Form from "./components/Form/Form";
import PlayListItem from "./components/PlayList/PlayList";
import YouTubePlayer from "./components/YouTubePlayer/YouTubePlayer";

import { MainLayout, PlayListContainer } from "./App.styles";

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

  const onRemoveVideoHandler = (id) => {
    deleteVideo(id);
    setPlayList((prev) => prev.filter((video) => id !== video.id));
  };

  return (
    <MainLayout>
      <PlayListContainer>
        <Form onAdd={onAdd} />
        <PlayListItem playList={playList} onRemove={onRemoveVideoHandler} />
      </PlayListContainer>
      <YouTubePlayer
        id={currentVideo && currentVideo.id}
        videoId={currentVideo ? currentVideo.embedCode : ""}
        onEnd={onRemoveVideoHandler}
      />
    </MainLayout>
  );
}

export default App;
