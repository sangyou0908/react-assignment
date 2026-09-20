import { useState } from "react";

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "";

  return (
    <article className="movie-card">
      {posterUrl ? (
        <img src={posterUrl} alt={movie.title} />
      ) : (
        <div className="poster-placeholder">포스터 없음</div>
      )}

      <h3>{movie.title}</h3>
      <p>평점: {movie.vote_average.toFixed(1)}</p>

      <button
        className={isFavorite ? "favorite-button active" : "favorite-button"}
        onClick={handleFavorite}
      >
        {isFavorite ? "♥ 찜 해제" : "♡ 찜"}
      </button>

      {isFavorite ? (
        <span className="favorite-badge">찜한 영화</span>
      ) : null}
    </article>
  );
}

export default MovieCard;
