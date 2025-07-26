import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import antdTheme from "./theme";
import "./index.css";
import App from "./App.tsx";
import { initializeStore } from "./store";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.tsx";

// Initialize store on app startup
initializeStore();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider theme={antdTheme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>
);
