import { useState } from "react";
import classes from "./MoviesFinder.module.css";
import MoviesFinderForm from "./MoviesFinderForm";

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
    setSelectedYears(MoviesFinderForm.years[event.target.value]);
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
    const movies = data.Search;
    if (selectedYears && selectedYears.key != 0) {
      movies.filter((movie) => {
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
    let url = `https://www.omdbapi.com/?apikey=9cb365b9&type=movie&s=${searchParam}`;
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

      {resultsFound && (
        <div>
          <h1>Wyszukano {results.length} filmów</h1>
          {results.map((movie) => {
            return <div key={movie.imdbID}>{movie.Title}</div>;
          })}
        </div>
      )}
    </div>
  );
}
export default MoviesFinder;
