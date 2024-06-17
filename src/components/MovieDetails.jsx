function MovieDetails({ movie }) {
  return (
    <>
      <h2>{movie.Title}</h2>
      <p>Rok: {movie.Year}</p>
    </>
  );
}

export default MovieDetails;
