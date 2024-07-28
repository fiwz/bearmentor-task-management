import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Master from "./components/layouts/master.tsx";
import Section from "./components/section.tsx";
import ListView from "./components/layouts/list-view.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Master></Master>,
    children: [
      {
        index: true,
        element: <Section></Section>,
      },
      {
        path: "/overview",
        element: <Section></Section>,
      },
      {
        path: "/list",
        element: <ListView></ListView>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
