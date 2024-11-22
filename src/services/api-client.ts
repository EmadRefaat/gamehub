import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2e50d460e2334b99875b8226b8a346f5",
  },
});
