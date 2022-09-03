const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Video = new Schema(
  {
    url: { type: String, required: true },
    title: { type: String, required: false },
    length: { type: String, required: false },
  },
  { timestamps: true }
);

Video.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model("videos", Video);
