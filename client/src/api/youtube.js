import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

const BASE_URL =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&fields=items(snippet,contentDetails)&";

momentDurationFormatSetup(moment);

const processDuration = (duration) =>
  moment
    .duration(duration)
    .format("h:mm:ss")
    .padStart(4, "0:0");

export const getVideoDetails = (videoId) => {
  const url = `${BASE_URL}&key=AIzaSyDfhTVqAL2i9CTb_mAytU2oJf1hXB3_XbE&id=${videoId}`;
  return fetch(url)
    .then((response) => response.json())
    .then((response) => {
      if (response && response.items) {
        const {
          contentDetails: { duration },
          snippet: { title },
        } = response.items[0];
        return { title, length: processDuration(duration) };
      }
      return {};
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
