import { useLoaderData } from "react-router-dom";

function MovieDetails() {
  const details = useLoaderData();

  return (
    <>
      <h1>{details.Title}</h1>
      <p>{details.Plot}</p>
      <p>Data wydania: {details.Released}</p>
      <p>Czas trwania: {details.Runtime}</p>
      <p>Gatunek: {details.Genre}</p>
      <p>Jezyk: {details.Language}</p>
      <div>
        <h2>TODO</h2>
        <p>Reżyser: {details.Director}</p>
        <p>Scenariusz: {details.Writer}</p>
        <p>Aktorzy: {details.Actors}</p>
        <div>
          <img
            src={details.Poster}
            className="movie-poster"
            alt="Movie poster"
          />
        </div>
        <div>
          <p>Ocena IMDB: {details.imdbRating}</p>
          <p>Liczba głosów: {details.imdbVotes}</p>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
