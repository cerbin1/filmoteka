import { useCallback, useEffect, useState } from "react";
import classes from "./RankingMovieDetails.module.css";
import { Link } from "react-router-dom";

function RankingMovieDetails({ id, number }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(
    async (controller) => {
      try {
        const url = `https://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_OMDB_API_KEY
        }&i=${id}`;
        const response = await fetch(url, {
          signal: controller.signal,
        });
        const responseJson = await response.json();
        setData(responseJson);
      } catch (error) {
        console.log(error);
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    },
    [id]
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller);
    return () => controller.abort();
  }, [fetchData]);

  return (
    <>
      {isLoading && <p>Ładowanie...</p>}
      {!isLoading && (
        <div className={classes.movieListItem}>
          {data.Poster !== "N/A" && (
            <img
              src={data.Poster}
              className={classes.moviePoster}
              alt={`Poster-for-${data.Title}`}
            />
          )}
          <div className={classes.movieInfo}>
            <h2>
              <span className={classes.number}>{number}.</span> {data.Title}
            </h2>
            <p>Rok: {data.Year}</p>
            <Link to={`/movies/${data.imdbID}`}>Szczegóły</Link>
          </div>
        </div>
      )}
    </>
  );
}
export default RankingMovieDetails;
