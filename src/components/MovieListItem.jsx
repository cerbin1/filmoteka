import classes from "./MovieListItem.module.css";
import { Link } from "react-router-dom";

function MovieListItem({ movie }) {
  return (
    <div className={classes.movieListItem}>
      {movie.Poster !== "N/A" && (
        <img
          src={movie.Poster}
          className={classes.moviePoster}
          alt={`Poster-for-${movie.Title}`}
        />
      )}
      <div className={classes.movieInfo}>
        <h2>{movie.Title}</h2>
        <p>Rok: {movie.Year}</p>
        <Link to="todo">Szczegóły</Link>
      </div>
    </div>
  );
}

export default MovieListItem;
