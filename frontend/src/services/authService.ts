import axios from "../config/axios.config";
import { loginType } from "../types/authTypes.types";
import env from "../utils/env";

export const authApi = {
  login: async (params: loginType) => {
    const res = await axios.post(`${env.apiBaseUrl}/auth/login`, params);
    console.log("res", res.data);

    return res.data;
  },
};
