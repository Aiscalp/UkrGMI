import axios, { AxiosInstance } from "axios";

let api: AxiosInstance;

export function createApi() {
  api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  });

  return api;
}
export function useApi() {
  if (!api) {
    createApi();
  }
  return api;
}

export default useApi;
