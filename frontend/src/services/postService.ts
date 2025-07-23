import axios from "../config/axios.config";
import env from "../utils/env";

export const postApi = {
  listPosts: async () => {
    const res = await axios.get(`${env.apiBaseUrl}/posts`);
    console.log("res", res.data);

    return res.data;
  },
};
