import MovieDetails from "./MovieDetails";

function MovieList({ movies, totalResults }) {
  return (
    <>
      <h1>Znaleziono {totalResults} filmów</h1>
      {movies.map((movie) => (
        <MovieDetails movie={movie} key={movie.imdbID} />
      ))}
    </>
  );
}

export default MovieList;
