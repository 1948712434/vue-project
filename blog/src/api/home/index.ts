import http from "../http";

export const getValue = (params = { id: 1 }) => {
  return http.get("/api/getValue", {
    params: params,
  });
};

//登录
export const login = (params = {}) => {
  return http.post("/api/login", {
    params: params,
  });
};

export const space = () => {
  return http.get("/api/space");
};
