import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import OpciPodaci from "./components/OpciPodaci";
import Popis from "./components/Popis";
import Donacije from "./components/Donacije";
import Obavijesti from "./components/Obavijesti";
import Unos from "./components/Unos";
import ErrorStranica from "./components/ErrorStranica";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OpciPodaci />,
    errorElement: <ErrorStranica />,
  },
  {
    path: "/popis",
    element: <Popis />,
    errorElement: <ErrorStranica />,
  },
  {
    path: "/donacije",
    element: <Donacije />,
  },
  {
    path: "/obavijesti",
    element: <Obavijesti />,
  },
  {
    path: "/unos",
    element: <Unos />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
