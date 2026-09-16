import MovieCard from "./MovieCard.jsx";
import { useState } from "react";

const movies = [
  {
    id: 1,
    title: "인셉션",
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  },
  {
    id: 2,
    title: "인터스텔라",
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 3,
    title: "다크 나이트",
    rating: 9.0,
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
];

function MovieList() {
  const [keyword, setKeyword] = useState("");

  // TODO 2. keyword State와 handleChange 함수를 만들어 보세요.

  // TODO 3. movies와 keyword를 이용해 filteredMovies를 만들어 보세요.

  return (
    <>
      {/* TODO 4. 영화 목록 위에 검색 input을 추가해 보세요. */}

      <section className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </section>

      {/* TODO 6. 검색 결과가 없을 때 안내 문구가 표시되도록 변경해 보세요. */}
    </>
  );
}

export default MovieList;
