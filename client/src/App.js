import React, { useState, useEffect, useRef } from "react";

import { initSocketEvents } from "./api/socket.io";
import { getVideos, addVideo } from "./api/crudRequests";
import { getVideoDetails } from "./api/youtube";

import Form from "./components/Form/Form";
import PlayListItem from "./components/PlayList/PlayList";

import "./App.css";

function App() {
  const isEffectRan = useRef(false);

  const [playList, setPlayList] = useState([]);

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

  const onAdd = (value) => {
    const url = new URL(value);
    const embedCode = url.searchParams.get("v");
    getVideoDetails(embedCode).then(({ title, length }) =>
      addVideo({ url: embedCode, title, length })
    );
  };

  return (
    <div className="App">
      <Form onAdd={onAdd} />
      <PlayListItem playList={playList} />
    </div>
  );
}

export default App;
