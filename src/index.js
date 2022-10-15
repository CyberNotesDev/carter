import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Vote from "./components/Vote";
import Links from "./components/Links"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route
        path="carter"
        element={<Links />}
      />
      <Route path="carter/vote" element={<Vote />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
