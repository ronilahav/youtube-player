import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

import { addVideo } from "../api/crudRequests";
import { getVideoDetails } from "../api/youtube";

momentDurationFormatSetup(moment);

export const onAdd = (value) => {
  try {
    const url = new URL(value);
    const embedCode = url.searchParams.get("v");
    if (embedCode) {
      getVideoDetails(embedCode).then(({ title, length }) =>
        addVideo({ url: value, embedCode, title, length }).catch((error) =>
          console.error(error)
        )
      );
    }
  } catch (error) {}
};

export const processDuration = (duration) =>
  moment
    .duration(duration)
    .format("h:mm:ss")
    .padStart(4, "0:0");
