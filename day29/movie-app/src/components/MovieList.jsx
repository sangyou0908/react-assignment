import MovieCard from "./MovieCard.jsx";
import { useEffect, useState } from "react";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(keyword.toLowerCase()),
  );

  useEffect(() => {
    async function fetchMovies() {
      // API 요청 코드
      const token = import.meta.env.VITE_TMDB_TOKEN;
      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1",
        options,
      );
      const data = await response.json();

      setMovies(data.results);
    }

    fetchMovies();
  }, []);

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <>
      <input
        type="text"
        placeholder="영화 제목을 입력해 주세요."
        className="search-input"
        value={keyword}
        onChange={handleChange}
      />
      {filteredMovies.length === 0 ? (
        <p>검색 결과가 없습니다.</p>
      ) : (
        <section className="movie-list">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}></MovieCard>
          ))}
        </section>
      )}
    </>
  );
}

export default MovieList;
