import { AxiosRequestConfig } from "axios";

import _axios from "./axios";
interface objAny {
  [propName: string]: any;
}
export const httpGet = async (url: string, params?: objAny) => {
  let response = await _axios.get(url, { params: params });
  return response.data;
};
export const httpPost = async (
  url: string,
  data?: objAny,
  config?: AxiosRequestConfig | undefined,
) => {
  let response = await _axios.post(url, data, config);
  return response.data;
};
