import MovieDetails from "./MovieDetails";

function MovieList({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <MovieDetails movie={movie} key={movie.imdbID} />
      ))}
    </>
  );
}

export default MovieList;
