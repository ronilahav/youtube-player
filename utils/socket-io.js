const { Server } = require("socket.io");

let io;

exports.socketConnection = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.info(`Client connected [id=${socket.id}]`);

    socket.on("disconnect", () => {
      console.info(`Client disconnected [id=${socket.id}]`);
    });
  });
};

exports.sendMessage = (key, message) => io.emit(key, message);
