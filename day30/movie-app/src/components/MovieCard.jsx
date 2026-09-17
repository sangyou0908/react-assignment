import { useState } from "react";

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <article className="movie-card">
      {/* TODO 6. TMDB Response 구조에 맞게 poster_path를 사용하도록 수정하세요. */}
      <img src={movie.poster} alt={movie.title} />

      <h3>{movie.title}</h3>

      {/* TODO 6. TMDB Response 구조에 맞게 vote_average를 사용하도록 수정하세요. */}
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
