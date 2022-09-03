import React, { useState, useEffect, useRef } from "react";

import { initSocketEvents } from "./api/socket.io";
import { getVideos, addVideo } from "./api/crudRequests";

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
    addVideo({ url: value });
  };

  return (
    <div className="App">
      <Form onAdd={onAdd} />
      <PlayListItem playList={playList} />
    </div>
  );
}

export default App;
