import { useLoaderData } from "react-router-dom";
import classes from "./MovieDetails.module.css";
import { formatField } from "../../utils/omdb";
import { useLanguage } from "../../i18n";

function MovieDetails() {
  const details = useLoaderData();
  const { t } = useLanguage();

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <div>
          <h1>{formatField(details.Title, t("Szczegóły filmu"))}</h1>
          <p>
            <strong>{t("Fabuła:")}</strong> {formatField(details.Plot, t("Brak danych"))}
          </p>
        </div>
        {details.Poster && details.Poster !== "N/A" ? (
          <img
            src={details.Poster}
            className={classes.poster}
            alt={`${t("Plakat filmu ")}${details.Title}`}
          />
        ) : <div className={classes.posterFallback} aria-label={t("Brak plakatu")}>{t("Brak plakatu")}</div>}
      </div>
      <div className={classes.section}>
        <h2>{t("Szczegóły sekcji")}</h2>
        <p>
          <strong>{t("Data wydania: ")}</strong>
          {formatField(details.Released, t("Brak danych"))}
        </p>
        <p>
          <strong>{t("Czas trwania: ")}</strong>
          {formatField(details.Runtime, t("Brak danych"))}
        </p>
        <p>
          <strong>{t("Gatunek: ")}</strong>
          {formatField(details.Genre, t("Brak danych"))}
        </p>
        <p>
          <strong>{t("Język: ")}</strong>
          {formatField(details.Language, t("Brak danych"))}
        </p>
      </div>
      <div className={classes.section}>
        <h2>{t("Oceny użytkowników")}</h2>
        <p>
          <strong>{t("Ocena IMDB: ")}</strong>
          {formatField(details.imdbRating, t("Brak danych"))}
        </p>
        <p>
          <strong>{t("Liczba głosów: ")}</strong>
          {formatField(details.imdbVotes, t("Brak danych"))}
        </p>
      </div>
      <div className={classes.section}>
        <h2>{t("Ekipa filmowa")}</h2>
        <p>
          <strong>{t("Reżyser: ")}</strong>
          {formatField(details.Director, t("Brak danych"))}
        </p>
        <p>
          <strong>{t("Scenariusz: ")}</strong>
          {formatField(details.Writer, t("Brak danych"))}
        </p>
        <p>
          <strong>{t("Aktorzy: ")}</strong>
          {formatField(details.Actors, t("Brak danych"))}
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;
