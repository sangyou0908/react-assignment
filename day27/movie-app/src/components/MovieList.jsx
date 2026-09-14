import MovieCard from "./MovieCard";

function MovieList() {
  return (
    <main className="container">
      <h1>Movie App</h1>
      <section className="movie-list">
        <MovieCard movie={movie1} />
        <MovieCard movie={movie2} />
        <MovieCard movie={movie3} />
      </section>
    </main>
  );
}

export default MovieList;
