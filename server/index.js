const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const db = require("./db");
const { socketConnection } = require("./utils/socket-io");
const videoRouter = require("./routes/video-router");

const apiPort = 8000;
const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

socketConnection(server);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", videoRouter);

server.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
