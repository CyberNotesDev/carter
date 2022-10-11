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
    path: "/carter",
    element: <App />,
    errorElement: <p>404</p>,
    children: [
      {
        path: "/carter",
        element: <Home />
      },
      {
        path: "carter/vote",
        element: <Vote />,
      },
      {
        path: "carter/philosophy",
        element: <div>Philosophy</div>,
      },
      {
        path: "carter/merch",
        element: <div>Merch</div>,
      },
      {
        path: "carter/content",
        element: <div>content</div>,
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
