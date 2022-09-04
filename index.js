const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const db = require("./db");
const { socketConnection } = require("./utils/socket-io");
const videoRouter = require("./routes/video-router");

const apiPort = process.env.PORT || 8000;
const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client/build")));

socketConnection(server);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use("/api", videoRouter);

server.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
