import { AxiosResponse } from "axios";
import axios from "../config/axios.config";
import { ApiResponse } from "../types/api.types";
import { LoginFormType, LoginResponseType } from "../types/auth.types";
import env from "../utils/env";

export const authApi = {
  login: async (params: LoginFormType) => {
    const res = await axios.post(`${env.apiBaseUrl}/auth/login`, params);
    return res;
  },
};
