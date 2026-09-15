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
      <button onClick={handleFavorite}>
        {isFavorite ? "❤️ 찜 해제" : "🤍찜"}
      </button>
    </article>
  );
}

export default MovieCard;
