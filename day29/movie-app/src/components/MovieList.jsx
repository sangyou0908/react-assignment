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

  const filteredMovies = movies.filter((movie) =>
    movie.title.includes(keyword),
  );

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  // TODO 3. movies와 keyword를 이용해 filteredMovies를 만들어 보세요.

  return (
    <>
      <input
        type="text"
        placeholder="영화 제목을 입력해 주세요."
        className="search-input"
        value={keyword}
        onChange={handleChange}
      />
      <section className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </section>
    </>
  );
}

export default MovieList;
