import MovieDetails from "./MovieDetails";

function MovieList({ movies }) {
  return (
    <>
      <h1>Znaleziono {movies.length} filmów</h1>
      {movies.map((movie) => (
        <MovieDetails movie={movie} key={movie.imdbID} />
      ))}
    </>
  );
}

export default MovieList;
