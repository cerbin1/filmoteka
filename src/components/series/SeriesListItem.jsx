import classes from "./SeriesListItem.module.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n";

function SeriesListItem({ serie }) {
  const { t } = useLanguage();
  return (
    <div className={classes.seriesListItem}>
      {serie.Poster !== "N/A" && (
        <img
          src={serie.Poster}
          className={classes.seriesPoster}
          alt={`${t("Plakat serialu ")}${serie.Title}`}
        />
      )}
      <div className={classes.seriesInfo}>
        <h2>{serie.Title}</h2>
        <p>{t("Rok: ")}{serie.Year}</p>
        <Link to={`/series/${serie.imdbID}`}>{t("Szczegóły")}</Link>
      </div>
    </div>
  );
}

export default SeriesListItem;
