// import axios from "axios";
// export interface fechResponse<T> {
//   count: number;
//   results: T[];
// }

// export default axios.create({
//   baseURL: "https://api.rawg.io/api",
//   params: {
//     key: "2e50d460e2334b99875b8226b8a346f5",
//   },
// });

import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export interface fechResponse<T> {
  count: number;
  results: T[];
}

const req: AxiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2e50d460e2334b99875b8226b8a346f5",
  },
});

class apiClient<T> {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return req
      .get<fechResponse<T>>(this.endPoint, config)
      .then((res) => res.data);
  };
}

export default apiClient;
