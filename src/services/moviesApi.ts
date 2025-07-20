import { axiosInstance } from "./axiosInstance";

export const getMoviesApi = (type:string) => axiosInstance("/", {
  params: {
    s: type,
    page: 1,
  },
});