export const getVideos = () => {
  return fetch("/api/videos")
    .then((response) => response.json())
    .then((response) => {
      if (response.success) {
        return response.data;
      } else {
        throw Error(response.error);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const addVideo = (data) => {
  return fetch("/api/video", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.success) {
        return response.data;
      } else {
        throw Error(response.error);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const deleteVideo = (id) => {
  return fetch(`/api/video/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.success) {
        return response.data;
      } else {
        throw Error(response.error);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
