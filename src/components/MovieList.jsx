import MovieListItem from "./MovieListItem";

function MovieList({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <MovieListItem movie={movie} key={movie.imdbID} />
      ))}
    </>
  );
}

export default MovieList;
