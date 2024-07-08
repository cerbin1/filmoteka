import classes from "./SeriesListItem.module.css";
import { Link } from "react-router-dom";

function SeriesListItem({ serie }) {
  return (
    <div className={classes.seriesListItem}>
      {serie.Poster !== "N/A" && (
        <img
          src={serie.Poster}
          className={classes.seriesPoster}
          alt={`Poster-for-${serie.Title}`}
        />
      )}
      <div className={classes.seriesInfo}>
        <h2>{serie.Title}</h2>
        <p>Rok: {serie.Year}</p>
        <Link to={`/series/${serie.imdbID}`}>Szczegóły</Link>
      </div>
    </div>
  );
}

export default SeriesListItem;
