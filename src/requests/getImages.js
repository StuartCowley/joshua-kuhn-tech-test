import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        return response.data.collection.items
          .filter((image) => image.data[0].media_type === "image")
          .map((image) => image.links[0].href);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default getImages;
