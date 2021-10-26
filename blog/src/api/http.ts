import axios from "axios";

//引入环境变量
const env = import.meta.env;

//设置baseUrl
const baseURL = () => {
  let url;
  env.DEV ? (url = "/") : (url = "productUrl");
  return url;
};

// 创建 axios 实例
const service = axios.create({
  // 配置项
  baseURL: baseURL(),
  // 跨域请求时是否需要使用凭证
  withCredentials: true,
  // 请求 30s 超时
  timeout: 30000,
});

// 根据不同的状态码，生成不同的提示信息
const showStatus = (status: number) => {
  let message = "";
  // 这一坨代码可以使用策略模式进行优化
  switch (status) {
    case 400:
      message = "请求错误(400)";
      break;
    case 401:
      message = "未授权，请重新登录(401)";
      break;
    case 403:
      message = "拒绝访问(403)";
      break;
    case 404:
      message = "请求出错(404)";
      break;
    case 408:
      message = "请求超时(408)";
      break;
    case 500:
      message = "服务器错误(500)";
      break;
    case 501:
      message = "服务未实现(501)";
      break;
    case 502:
      message = "网络错误(502)";
      break;
    case 503:
      message = "服务不可用(503)";
      break;
    case 504:
      message = "网络超时(504)";
      break;
    case 505:
      message = "HTTP版本不受支持(505)";
      break;
    default:
      message = `连接出错(${status})!`;
  }
  return `${message}，请检查网络或联系管理员！`;
};

//请求拦截
service.interceptors.request.use(
  (config: any) => {
      // config.token = "token";
    return config;
  },
  (error) => {
    // 错误抛到业务代码
    error.data = {};
    error.data.msg = "服务器异常，请联系管理员！";
    return Promise.resolve(error);
  }
);

//响应拦截
service.interceptors.response.use(
  (response: any) => {
    const status: number = response.status;
    let msg: string = "";
    if (status < 200 || status >= 300) {
      //处理http错误，抛到业务代码
      msg = showStatus(status);

      if (typeof response.data === "string") {
        response.data = { msg };
      } else {
        response.data.msg = msg;
      }
    }

    return response;
  },
  (error: any) => {
    //错误抛到业务代码
    error.data = {};
    error.data.msg = "请求超时或服务器异常，请检查网络或联系管理员！";
    return Promise.resolve(error);
  }
);

export default service;
