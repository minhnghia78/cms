import { create } from "zustand";
import { postApi } from "../services/postService";
import { authApi } from "../services/authService";
import { loginType } from "../types/authTypes.types";

export type PostItem = {};

export const useAuthStore = create(() => ({
  username: "",
  token: "",
}));

export const loginApi = async ({ username, password }: loginType) => {
  try {
    const res = await authApi.login({ username, password });
    if (res.statusCode === 200) {
      useAuthStore.setState((state) => ({
        token: {
          ...res.token,
        },
        username: username,
      }));
    }
  } catch (error) {
    console.log(error);
  }
};
