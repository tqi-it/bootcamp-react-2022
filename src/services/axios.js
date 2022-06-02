import axios from "axios";
import { getJwt } from "../commons/utils/auth";

const REACT_APP_API_URL = "http://localhost:8080/api";

const params = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: getJwt(),
  },
};

const createApi = (baseURL = "", config = {}) => {
  const api = axios.create({
    baseURL,
    ...params,
    ...config,
  });

  api.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return api;
};

export default createApi(REACT_APP_API_URL);
