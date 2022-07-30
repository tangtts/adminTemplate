import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { ElMessage, ElMessageBox } from "element-plus";

function getSession(key: string) {
  let json: any = window.sessionStorage.getItem(key);
  return JSON.parse(json);
}

export const PATH_URL: string = "https://mobile-ms.uat.homecreditcfc.cn/mock";

// 配置新建一个 axios 实例
const service: AxiosInstance = axios.create({
  baseURL: PATH_URL,
  timeout: 50000,
  headers: { "Content-Type": "application/json" },
});

// 添加请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (getSession("token")) {
      config.headers.common["Authorization"] = `${getSession("token")}`;
    }
    return config;
  },
  (error: AxiosError) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    if (res.code) {
      return Promise.resolve(res.data);
    } else {
      return response.data;
    }
  },
  (error: AxiosError) => {
    if (error.message.indexOf("timeout") != -1) {
      ElMessage.error("网络超时");
    } else if (error.message == "Network Error") {
      ElMessage.error("网络连接错误");
    } else {
      ElMessage.error(error.message);
    }
    return Promise.reject(error);
  }
);

export default service;
