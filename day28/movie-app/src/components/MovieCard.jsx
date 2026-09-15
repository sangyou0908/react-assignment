import { useState } from "react";

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>평점: {movie.rating}</p>

      {/*
        이 위치에 찜 기능을 추가합니다.

        1) onClick Event 연결
        2) 일반 변수로 찜 여부 관찰
        3) useState로 변경
        4) State에 따라 버튼 문구 / className 변경
        5) 찜한 영화 배지 조건부 표시
      */}
    </article>
  );
}

export default MovieCard;
