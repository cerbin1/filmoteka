import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./router/RootLayout";
import HeroContent from "./components/HeroContent";
import MoviesFinder from "./components/MoviesFinder";
import SeriesFinder from "./components/SeriesFinder";
import MovieDetails from "./components/MovieDetails";
import SeriesDetails from "./components/SeriesDetails";
import { loader as movieDetailsLoader } from "./components/loaders/MovieDetailsLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HeroContent />,
      },
      {
        path: "/movies",
        element: <MoviesFinder />,
      },
      {
        path: "/movies/:id",
        element: <MovieDetails />,
        loader: movieDetailsLoader,
      },
      {
        path: "/series",
        element: <SeriesFinder />,
      },
      {
        path: "/series/:id",
        element: <SeriesDetails />,
        loader: movieDetailsLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
