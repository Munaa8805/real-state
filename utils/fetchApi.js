import axios from "axios";

/////
export const baseUrl = "https://bayut.p.rapidapi.com/";

// const options = {
//   method: "GET",
//   url: "https://bayut.p.rapidapi.com/auto-complete",
//   params: { query: "abu dhabi", hitsPerPage: "25", page: "0", lang: "en" },
//   headers: {
//     "x-rapidapi-host": "bayut.p.rapidapi.com",
//     "x-rapidapi-key": "9f69b7fb1dmshf20d74024257578p18bfa1jsn7fcb59df6d7f"
//   }
// };
export const fetchApi = async url => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "9f69b7fb1dmshf20d74024257578p18bfa1jsn7fcb59df6d7f"
    }
  });
  return data;
};
