import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ErrorPage } from "./ErrorPage";
import { Vote } from "./components/Vote";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/carter/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/vote",
        element: <Vote />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(-
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
