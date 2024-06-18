import { useState } from "react";
import classes from "./SeriesFinder.module.css";
import SeriesFinderForm from "./SeriesFinderForm";
import SeriesList from "./SeriesList";
import years from "../data/years";

function SeriesFinder() {
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
    let series = data.Search;
    if (selectedYears && selectedYears.key != 0) {
      series = series.filter((serie) => {
        return (
          serie.Year >= selectedYears.values.start &&
          serie.Year <= selectedYears.values.end
        );
      });
    }
    setResponseData({ series: series, totalResults: data.totalResults });
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
    }&type=series&s=${searchParam}&page=${page}`;
    const response = await fetch(url);
    return await response.json();
  }

  return (
    <div className={classes.seriesContainer}>
      <h1>Wyszukiwarka seriali</h1>
      <SeriesFinderForm
        onSubmit={onSubmitHandler}
        onSearchParamChange={onSearchParamChangeHandler}
        onSelectedYearsChange={onSelectedYearsChangeHandler}
        validationError={searchParamValidationError}
      />

      {loading && <h1>Ładowanie...</h1>}

      {!loading && !resultsFound && !tooManyResults && (
        <h1>Nie znaleziono żadnego serialu.</h1>
      )}
      {!loading && !resultsFound && tooManyResults && (
        <h1>Za dużo wyników. Spróbuj bardziej sprecyzować tytuł.</h1>
      )}

      {resultsFound && (
        <>
          <h2>
            Wszystkich seriali z podaną frazą: {responseData.totalResults}
          </h2>

          <SeriesList series={responseData.series} />
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
export default SeriesFinder;
