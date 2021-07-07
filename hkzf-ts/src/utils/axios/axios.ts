import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || "";
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
export let env = import.meta.env.MODE;
// if (env === "development") {
//   env=""
// }
// 后端 api 地址
let serverPath = {
  development: "http://localhost:8080",
  production: "http://47.108.197.220:8080",
};
// 后端地址
export const baseURL =
  env === "development" ? serverPath.development : serverPath.production;

let config = {
  // development 线下 production 线上
  baseURL: baseURL,
  timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    // console.log(response.data);
    return response;
  },
  function (error) {
    // Do something with response error
    console.log(error);
    return Promise.reject(error);
  },
);

export default _axios;
