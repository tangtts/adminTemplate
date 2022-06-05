// api.ts
import axios from "axios";
import request from "./request";

const getDynamicRoutes = () => axios.get(`/src/assets/json/dynamicRoutes.json`);

const login = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) =>
  request.get(`/60bc4bde4a9639001d42754a/example/test`, { username, password });

export { login, getDynamicRoutes };
