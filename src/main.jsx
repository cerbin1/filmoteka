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
import RouteError from "./components/router/RouteError";
import { LanguageProvider } from "./i18n";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <HeroContent /> },
      { path: "movies", element: <MoviesFinder /> },
      { path: "movies/:id", element: <MovieDetails />, loader: movieDetailsLoader, errorElement: <RouteError /> },
      { path: "series", element: <SeriesFinder /> },
      { path: "series/:id", element: <SeriesDetails />, loader: movieDetailsLoader, errorElement: <RouteError /> },
      { path: "ranking", element: <Ranking /> },
      { path: "account", element: <Account /> },
      { path: "*", element: <RouteError /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><LanguageProvider><RouterProvider router={router} /></LanguageProvider></React.StrictMode>
);
