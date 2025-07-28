import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import { LoginPage } from "../pages/login/LoginPage";
import ForumLayout from "../components/ForumLayout";
import TrendingContent from "../components/TrendingContent";
import { ListPostPage } from "../pages/posts/ListPostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ForumLayout />,
    children: [
      {
        index: true,
        element: <ListPostPage />,
      },
      { path: "/dd", element: <LoginPage /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <TrendingContent />,
  },
]);

export default router;
