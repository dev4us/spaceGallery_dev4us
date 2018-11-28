import fetch from "node-fetch";

const API_PARAM_KEY = "TP9y8C8u6U7gj4roR0AS9ePBqsA6d0FcpCa6Dahu";
const API_PARAM_URL = "https://api.nasa.gov/planetary/apod?api_key=";

export const getSpacePic = date => {
  let API_PARAM_DATE = "&date=" + date;
  const API_END_POINT = API_PARAM_URL + API_PARAM_KEY + API_PARAM_DATE;

  console.log(API_END_POINT);

  return fetch(`${API_END_POINT}`).then(res => res.json());
};
