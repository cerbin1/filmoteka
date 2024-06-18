import classes from "./MovieListItem.module.css";
import { Link } from "react-router-dom";

function MovieListItem({ serie }) {
  return (
    <div className={classes.movieListItem}>
      {serie.Poster !== "N/A" && (
        <img
          src={serie.Poster}
          className={classes.moviePoster}
          alt={`Poster-for-${serie.Title}`}
        />
      )}
      <div className={classes.movieInfo}>
        <h2>{serie.Title}</h2>
        <p>Rok: {serie.Year}</p>
        <Link to={`/series/${serie.imdbID}`}>Szczegóły</Link>
      </div>
    </div>
  );
}

export default MovieListItem;
