import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

export const initSocketEvents = ({ onNewVideo }) => {
  socket.on("connect", () => console.info("socket connected id:", socket.id));
  socket.on("new-video", (data) => {
    console.info("new-video", data);
    onNewVideo(data);
  });
  socket.on("disconnect", () => console.info("server disconnected"));
};
