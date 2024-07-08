import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./router/RootLayout";
import HeroContent from "./components/HeroContent";
import MoviesFinder from "./components/movies/MoviesFinder";
import SeriesFinder from "./components/series/SeriesFinder";
import MovieDetails from "./components/movies/MovieDetails";
import SeriesDetails from "./components/series/SeriesDetails";
import { loader as movieDetailsLoader } from "./components/loaders/MovieDetailsLoader";
import Ranking from "./components/ranking/Ranking";
import Account from "./components/account/Account";

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
      {
        path: "/ranking",
        element: <Ranking />,
      },
      {
        path: "/account",
        element: <Account />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
