import { create } from "zustand";
import { LoginFormType, LoginResponseType } from "../types/auth.types";
import { authApi } from "../services/authService";
import { ApiResponse } from "../types/api.types";
import { AxiosResponse } from "axios";

export type PostItem = {};

export const useAuthStore = create(() => ({
  username: "",
  token: "",
}));

export const loginApi = async ({ username, password }: LoginFormType) => {
  try {
    const res = await authApi.login({
      username,
      password,
    });
    console.log("res==============", res);

    if (res.statusCode === "200") {
      localStorage.setItem("token", res.data?.token);

      useAuthStore.setState({
        token: res.data?.token,

        username: username,
      });
      return { success: true, data: res.data };
    } else {
      return { success: false, error: res.message || "Unknown error" };
    }
  } catch (error) {
    console.error("Login API Error:", error);
    return { success: false, error };
  }
};
