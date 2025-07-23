import { create } from "zustand";
import { postApi } from "../services/postService";

export type PostItem = {};

export const usePostStore = create(() => ({
  listPosts: [],
}));

export const listPostApi = async () => {
  try {
    const res = await postApi.listPosts();
    usePostStore.setState((state) => ({
      listPosts: {
        ...res.content,
      },
    }));
  } catch (error) {
    console.log(error);
  }
};
