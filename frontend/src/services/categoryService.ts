import { AxiosResponse } from "axios";
import axios from "../config/axios.config";
import { ApiResponse } from "../types/api.types";
import { LoginFormType, LoginResponseType } from "../types/auth.types";
import env from "../utils/env";

export const categoryService = {
  getListCategories: async () => {
    const res = await axios.get(`${env.apiBaseUrl}/categories`);
    return res;
  },
};
