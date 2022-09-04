const mongoose = require("mongoose");

const password = process.env.MONGO_PASSWORD;

const maongoConnection = `mongodb+srv://RoniLahav:${password}@cluster0.kclxn.mongodb.net/youTubePlayListDatabase?retryWrites=true&w=majority`;

mongoose.connect(maongoConnection, { useNewUrlParser: true }).catch((e) => {
  console.error("Connection error", e.message);
});

const db = mongoose.connection;

module.exports = db;
