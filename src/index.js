import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/carter",
    element: (
      <App />
    ),
  },
  {
    path: "vote",
    element: <div>Vote</div>,
  },
  {
    path: "philosophy",
    element: <div>Philosophy</div>,
  },
  {
    path: "merch",
    element: <div>Merch</div>,
  },
  {
    path: "Content",
    element: <div>content</div>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
