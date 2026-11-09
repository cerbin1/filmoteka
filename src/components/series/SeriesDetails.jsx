import { useLoaderData } from "react-router-dom";
import classes from "./SeriesDetails.module.css";
import { formatField } from "../../utils/omdb";

function SeriesDetails() {
  const details = useLoaderData();

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <div>
          <h1>{formatField(details.Title, "Szczegóły serialu")}</h1>
          <p>
            <strong>Fabuła:</strong> {formatField(details.Plot)}
          </p>
        </div>
        {details.Poster && details.Poster !== "N/A" ? (
          <img
            src={details.Poster}
            className={classes.poster}
            alt={`Plakat serialu ${details.Title}`}
          />
        ) : <div className={classes.posterFallback} aria-label="Brak plakatu">Brak plakatu</div>}
      </div>
      <div className={classes.section}>
        <h2>Szczegóły</h2>
        <p>
          <strong>Data wydania: </strong>
          {formatField(details.Released)}
        </p>
        <p>
          <strong>Czas trwania: </strong>
          {formatField(details.Runtime)}
        </p>
        <p>
          <strong>Gatunek: </strong>
          {formatField(details.Genre)}
        </p>
        <p>
          <strong>Jezyk: </strong>
          {formatField(details.Language)}
        </p>
      </div>
      <div className={classes.section}>
        <h2>Oceny użytkowników</h2>
        <p>
          <strong>Ocena IMDB: </strong>
          {formatField(details.imdbRating)}
        </p>
        <p>
          <strong>Liczba głosów: </strong>
          {formatField(details.imdbVotes)}
        </p>
      </div>
      <div className={classes.section}>
        <h2>Ekipa filmowa</h2>
        <p>
          <strong>Reżyser: </strong>
          {formatField(details.Director)}
        </p>
        <p>
          <strong>Scenariusz: </strong>
          {formatField(details.Writer)}
        </p>
        <p>
          <strong>Aktorzy: </strong>
          {formatField(details.Actors)}
        </p>
      </div>
    </div>
  );
}

export default SeriesDetails;
