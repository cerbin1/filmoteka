import { useState } from "react";
import classes from "./MoviesFinder.module.css";
import MoviesFinderForm from "./MoviesFinderForm";
import MovieList from "./MovieList";
import years from "../data/years";

function MoviesFinder() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState();
  const [resultsFound, setResultsFound] = useState();
  const [selectedYears, setSelectedYears] = useState();
  const [searchParam, setSearchParam] = useState();

  function onSearchParamChangeHandler(event) {
    setSearchParam(event.target.value);
  }

  function onSelectedYearsChangeHandler(event) {
    setSelectedYears(years[event.target.value]);
  }

  async function onSubmitHandler(event) {
    event.preventDefault();
    if (!searchParam) return;
    clearData();
    const data = await fetchData();
    const resultsFound = data.Response === "True";
    if (resultsFound) {
      setResultsFound(resultsFound);
      extractSearchResults(data);
    }
    setLoading(false);
  }

  function extractSearchResults(data) {
    let movies = data.Search;
    if (selectedYears && selectedYears.key != 0) {
      movies = movies.filter((movie) => {
        return (
          movie.Year >= selectedYears.values.start &&
          movie.Year <= selectedYears.values.end
        );
      });
    }
    setResults(movies);
  }

  function clearData() {
    setLoading(true);
    setResultsFound(false);
  }

  async function fetchData() {
    let url = `https://www.omdbapi.com/?apikey=${
      import.meta.env.VITE_OMDB_API_KEY
    }&type=movie&s=${searchParam}`;
    const response = await fetch(url);
    return await response.json();
  }

  return (
    <div className={classes.moviesContainer}>
      <h1>Wyszukiwarka filmów</h1>
      <MoviesFinderForm
        onSubmit={onSubmitHandler}
        onSearchParamChange={onSearchParamChangeHandler}
        onSelectedYearsChange={onSelectedYearsChangeHandler}
      />

      {loading && <h1>Ładowanie...</h1>}

      {!loading && !resultsFound && <h1>Nie znaleziono filmów</h1>}

      {resultsFound && <MovieList movies={results} />}
    </div>
  );
}
export default MoviesFinder;
