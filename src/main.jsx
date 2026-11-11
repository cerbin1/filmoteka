import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Account from "./components/account/Account";
import HeroContent from "./components/HeroContent";
import { loader as movieDetailsLoader } from "./components/loaders/MovieDetailsLoader";
import MovieDetails from "./components/movies/MovieDetails";
import MoviesFinder from "./components/movies/MoviesFinder";
import Ranking from "./components/ranking/Ranking";
import RouteError from "./components/router/RouteError";
import SeriesDetails from "./components/series/SeriesDetails";
import SeriesFinder from "./components/series/SeriesFinder";
import { LanguageProvider } from "./i18n";
import "./index.css";
import RootLayout from "./router/RootLayout";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <HeroContent /> },
      { path: "movies", element: <MoviesFinder /> },
      {
        path: "movies/:id",
        element: <MovieDetails />,
        loader: movieDetailsLoader,
        errorElement: <RouteError />,
      },
      { path: "series", element: <SeriesFinder /> },
      {
        path: "series/:id",
        element: <SeriesDetails />,
        loader: movieDetailsLoader,
        errorElement: <RouteError />,
      },
      { path: "ranking", element: <Ranking /> },
      { path: "account", element: <Account /> },
      { path: "*", element: <RouteError /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </React.StrictMode>,
);
