import { useEffect, useRef } from "react";
import { io } from "socket.io-client";

import logo from "./logo.svg";
import "./App.css";

const socket = io("http://localhost:8000");

function App() {
  const isEffectRan = useRef(false);

  useEffect(() => {
    if (!isEffectRan.current) {
      socket.on("connect", () => console.log("connect", socket.id));
      socket.on("new-video", (data) => {
        console.log("created", data);
      });
      socket.on("disconnect", () => console.log("server disconnected"));
    }

    return () => {
      isEffectRan.current = true;
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
