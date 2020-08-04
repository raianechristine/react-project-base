import axios from "axios";

import { BASE_URL } from "utils/constants/endpoints";

const API = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

API.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export { API };
