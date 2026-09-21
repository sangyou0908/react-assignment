import { useEffect, useState } from "react";

import MovieList from "./MovieList.jsx";

function MovieSearch() {
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchedKeyword, setSearchedKeyword] = useState("");

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

  async function searchMovies(searchKeyword, targetPage) {
    setIsLoading(true);
    setError("");

    try {
      const encodedKeyword = encodeURIComponent(searchKeyword);
      const token = import.meta.env.VITE_TMDB_TOKEN;

      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodedKeyword}&language=ko-KR&page=${targetPage}`,
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
      setPage(data.page);
      setTotalPages(data.total_pages);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSearch(event) {
    event.preventDefault();

    const searchKeyword = keyword.trim();

    if (searchKeyword === "") {
      return;
    }

    setSearchedKeyword(searchKeyword);
    searchMovies(searchKeyword, 1);
  }

  function handlePrevPage() {
    const prevPage = page - 1;

    searchMovies(searchedKeyword, prevPage);
  }

  function handleNextPage() {
    const nextPage = page + 1;

    searchMovies(searchedKeyword, nextPage);
  }

  return (
    <>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          placeholder="영화 제목을 입력하세요"
          value={keyword}
          onChange={handleChange}
        />

        <button className="search-button" type="submit">
          검색
        </button>
      </form>

      <MovieList
        movies={movies}
        isLoading={isLoading}
        error={error}
      />

      {searchedKeyword !== "" &&
      !isLoading &&
      !error &&
      movies.length > 0 ? (
        <div className="pagination">
          <button
            type="button"
            onClick={handlePrevPage}
            disabled={page === 1}
          >
            이전
          </button>

          <span>
            {page} / {totalPages}
          </span>

          <button
            type="button"
            onClick={handleNextPage}
            disabled={page === totalPages}
          >
            다음
          </button>
        </div>
      ) : null}
    </>
  );
}

export default MovieSearch;
