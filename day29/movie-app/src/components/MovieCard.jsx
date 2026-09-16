import { useState } from "react";

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <article className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>평점: {movie.rating}</p>

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
