import { useState } from "react";
import classes from "./MoviesFinder.module.css";
import MoviesFinderForm from "./MoviesFinderForm";
import MovieList from "./MovieList";
import years from "../data/years";

function MoviesFinder() {
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState({});
  const [resultsFound, setResultsFound] = useState();
  const [tooManyResults, setTooManyResults] = useState();
  const [selectedYears, setSelectedYears] = useState();
  const [searchParam, setSearchParam] = useState();
  const [selectedPage, setSelectedPage] = useState(1);
  const [searchParamValidationError, setSearchParamValidationError] =
    useState(false);
  const pagesCount = Math.ceil(responseData.totalResults / 10);

  function onSearchParamChangeHandler(event) {
    setSearchParam(event.target.value);
  }

  function onSelectedYearsChangeHandler(event) {
    setSelectedYears(years[event.target.value]);
  }

  async function onPageChangeHandler(event) {
    setSelectedPage(event.target.value);
    fetchResultsFromApi(event.target.value);
  }

  async function fetchResultsFromApi(page) {
    clearData();
    const data = await fetchData(page);
    const resultsFound = data.Response === "True";
    if (resultsFound) {
      setResultsFound(resultsFound);
      extractResponseData(data);
    } else {
      if (data.Error === "Too many results.") {
        setTooManyResults(true);
      }
    }
    setLoading(false);
  }

  async function onSubmitHandler(event) {
    event.preventDefault();
    if (!validateSearchParam()) {
      setSearchParamValidationError(true);
      return;
    }
    setSelectedPage(1);
    fetchResultsFromApi();
  }

  function validateSearchParam() {
    return searchParam !== undefined && searchParam.length >= 3;
  }

  function extractResponseData(data) {
    let movies = data.Search;
    if (selectedYears && selectedYears.key != 0) {
      movies = movies.filter((movie) => {
        return (
          movie.Year >= selectedYears.values.start &&
          movie.Year <= selectedYears.values.end
        );
      });
    }
    setResponseData({ movies: movies, totalResults: data.totalResults });
  }

  function clearData() {
    setLoading(true);
    setResultsFound(false);
    setTooManyResults(false);
    setSearchParamValidationError(false);
  }

  async function fetchData(page = 1) {
    let url = `https://www.omdbapi.com/?apikey=${
      import.meta.env.VITE_OMDB_API_KEY
    }&type=movie&s=${searchParam}&page=${page}`;
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
        validationError={searchParamValidationError}
      />

      {loading && <h1>Ładowanie...</h1>}

      {!loading && !resultsFound && !tooManyResults && (
        <h1>Nie znaleziono żadnego filmu.</h1>
      )}
      {!loading && !resultsFound && tooManyResults && (
        <h1>Za dużo wyników. Spróbuj bardziej sprecyzować tytuł.</h1>
      )}

      {resultsFound && (
        <>
          <h2>Wszystkich filmów z podaną frazą: {responseData.totalResults}</h2>

          <MovieList movies={responseData.movies} />
          {pagesCount > 1 && (
            <div className={classes.pagination}>
              <label htmlFor="page">Strona: </label>
              <select
                name="page"
                id="page"
                defaultValue={selectedPage}
                onChange={(event) => {
                  onPageChangeHandler(event);
                }}
              >
                {[...Array(pagesCount).keys()].map((pageIndex) => (
                  <option
                    key={pageIndex}
                    value={pageIndex + 1}
                    defaultValue={pageIndex + 1 === selectedPage}
                  >
                    {pageIndex + 1}
                  </option>
                ))}
              </select>
            </div>
          )}
        </>
      )}
    </div>
  );
}
export default MoviesFinder;
