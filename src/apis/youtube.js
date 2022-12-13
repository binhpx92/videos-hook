import axios from "axios";

const KEY = "AIzaSyAvsiBswaKEZ37I3S_TRjS4AzFUx1GG0Wc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
