import { useState } from "react";
import classes from "./Movies.module.css";

const years = [
  { key: 0, text: "Wszystkie" },
  { key: 1, values: { start: 2020, end: 2030 }, text: "2020+" },
  { key: 2, values: { start: 2010, end: 2020 }, text: "2010-2020" },
  { key: 3, values: { start: 2000, end: 2010 }, text: "2000-2010" },
  { key: 4, values: { start: 1990, end: 2000 }, text: "1990-2000" },
  { key: 5, values: { start: 1980, end: 1990 }, text: "1980-1990" },
  { key: 6, values: { start: 1970, end: 1980 }, text: "1970-1980" },
  { key: 7, values: { start: 1960, end: 1970 }, text: "1960-1970" },
  { key: 8, values: { start: 1950, end: 1960 }, text: "1950-1960" },
];

function Movies() {
  const [year, setYear] = useState();
  const [searchParams, setSearchParams] = useState();
  const [results, setResults] = useState();
  const [resultsTrue, setResultsTrue] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setResults(false);
    setLoading(true);
    const data = await fetchData();
    console.log(data);
    const isTrue = data.Response === "True";
    setResultsTrue(isTrue);
    const movies = data.Search;
    if (year && year.key != 0) {
      movies.filter((movie) => {
        return movie.Year >= year.values.start && movie.Year <= year.values.end;
      });
    }
    setLoading(false);
    setResults(movies);
  }

  async function fetchData() {
    let url = `https://www.omdbapi.com/?apikey=9cb365b9&type=movie&s=${searchParams}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  return (
    <div className={classes.moviesContainer}>
      <h1>Wyszukiwarka filmów</h1>
      <form onSubmit={submit} action="">
        <div>
          <label htmlFor="year">Lata</label>
          <select
            name="year"
            id="year"
            onChange={(e) => setYear(years[e.target.value])}
          >
            {years.map((year) => (
              <option key={year.key} value={year.key}>
                {year.text}
              </option>
            ))}
          </select>
        </div>

        <input type="text" onChange={(e) => setSearchParams(e.target.value)} />
        <button type="submit">Szukaj</button>
      </form>

      {loading && <h1>Ładowanie...</h1>}
      {!resultsTrue && <h1>Nie znaleziono filmów</h1>}
      {results && resultsTrue && (
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
export default Movies;
