export const getVideos = () => {
  return fetch("http://localhost:8000/api/videos")
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
  return fetch("http://localhost:8000/api/video", {
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
  return fetch(`http://localhost:8000/api/video/${id}`, {
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
