import { useEffect, useState } from "react";

import MovieList from "./MovieList.jsx";

function MovieSearch() {
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  useEffect(() => {
    async function fetchMovies() {
      try {
        const token = import.meta.env.VITE_TMDB_TOKEN;

        const response = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error(`요청 실패: ${response.status}`);
        }

        const data = await response.json();

        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, []);

  async function handleSearch(event) {
    event.preventDefault();

    const searchKeyword = keyword.trim();

    if (searchKeyword === "") {
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const encodedKeyword = encodeURIComponent(searchKeyword);
      const token = import.meta.env.VITE_TMDB_TOKEN;

      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodedKeyword}&language=ko-KR&page=1`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error(`요청 실패: ${response.status}`);
      }

      const data = await response.json();

      // TODO 1. Search API 응답 결과(영화 목록)을 movies State에 저장하세요.
      setMovies(data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {/* TODO 2. submit Event가 발생하면 handleSearch가 실행되도록 연결하세요. */}
      <form className="search-form" onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          placeholder="영화 제목을 입력하세요"
          value={keyword}
          onChange={handleChange}
        />

        <button
          className="search-button"
          type="submit"
          // TODO 3. Loading 중에는 버튼을 클릭할 수 없도록 만드세요.
          disabled={isLoading}
        >
          {isLoading ? "검색 중..." : "검색"}
        </button>
      </form>

      <MovieList movies={movies} isLoading={isLoading} error={error} />
    </>
  );
}

export default MovieSearch;
