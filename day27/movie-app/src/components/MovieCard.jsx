function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>평점: {movie.rating}</p>
    </article>
  );
}

export default MovieCard;
