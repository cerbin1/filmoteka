import { useLoaderData } from "react-router-dom";
import classes from "./MovieDetails.module.css";

function MovieDetails() {
  const details = useLoaderData();

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <div>
          <h1>{details.Title}</h1>
          <p>
            <strong>Fabuła:</strong> {details.Plot}
          </p>
        </div>
        {details.Poster && (
          <img
            src={details.Poster}
            className={classes.poster}
            alt="Movie poster"
          />
        )}
      </div>
      <div className={classes.section}>
        <h2>Szczegóły</h2>
        <p>
          <strong>Data wydania: </strong>
          {details.Released}
        </p>
        <p>
          <strong>Czas trwania: </strong>
          {details.Runtime}
        </p>
        <p>
          <strong>Gatunek: </strong>
          {details.Genre}
        </p>
        <p>
          <strong>Jezyk: </strong>
          {details.Language}
        </p>
      </div>
      <div className={classes.section}>
        <h2>Oceny użytkowników</h2>
        <p>
          <strong>Ocena IMDB: </strong>
          {details.imdbRating}
        </p>
        <p>
          <strong>Liczba głosów: </strong>
          {details.imdbVotes}
        </p>
      </div>
      <div className={classes.section}>
        <h2>Ekipa filmowa</h2>
        <p>
          <strong>Reżyser: </strong>
          {details.Director}
        </p>
        <p>
          <strong>Scenariusz: </strong>
          {details.Writer}
        </p>
        <p>
          <strong>Aktorzy: </strong>
          {details.Actors}
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;
