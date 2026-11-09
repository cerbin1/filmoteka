import classes from "./MovieListItem.module.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n";

function MovieListItem({ movie }) {
  const { t } = useLanguage();
  return (
    <div className={classes.movieListItem}>
      {movie.Poster !== "N/A" && (
        <img
          src={movie.Poster}
          className={classes.moviePoster}
          alt={`${t("Plakat filmu ")}${movie.Title}`}
        />
      )}
      <div className={classes.movieInfo}>
        <h2>{movie.Title}</h2>
        <p>{t("Rok: ")}{movie.Year}</p>
        <Link to={`/movies/${movie.imdbID}`}>{t("Szczegóły")}</Link>
      </div>
    </div>
  );
}

export default MovieListItem;
