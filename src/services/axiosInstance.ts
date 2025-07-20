import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://www.omdbapi.com/",
  params: {
    apikey: "6c864312",
  },
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(null, (err) => {
  console.log("interceptors err:", err);
  return err;
});
