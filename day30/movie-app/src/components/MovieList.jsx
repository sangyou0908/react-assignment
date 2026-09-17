import { useState } from "react";
import MovieCard from "./MovieCard.jsx";

const movies = [
  {
    id: 1,
    title: "인셉션",
    rating: 8.8,
    poster:
      "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  },
  {
    id: 2,
    title: "인터스텔라",
    rating: 8.7,
    poster:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 3,
    title: "다크 나이트",
    rating: 9.0,
    poster:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
];

function MovieList() {
  const [keyword, setKeyword] = useState("");

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  const filteredMovies = movies.filter((movie) =>
    movie.title.includes(keyword)
  );

  // TODO 3. 위의 하드 코딩된 movies 배열을 삭제하고
  // const [movies, setMovies] = useState([]) 형태의 State로 변경하세요.

  // TODO 4~5.
  // useEffect를 import하고, 내부에 async 함수 fetchMovies()를 만들어
  // TMDB upcoming API를 요청하세요.
  // Response를 JSON으로 변환한 뒤 setMovies(data.results)로 저장하세요.
  //
  // const token = import.meta.env.VITE_TMDB_TOKEN;
  //
  // API:
  // https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1

  // TODO 7~9.
  // isLoading State와 error State를 만들고,
  // try / catch / finally 및 response.ok를 사용해
  // Loading / Error UI가 동작하도록 완성하세요.

  return (
    <>
      <input
        className="search-input"
        type="text"
        placeholder="영화 제목을 입력하세요"
        value={keyword}
        onChange={handleChange}
      />

      {filteredMovies.length === 0 ? (
        <p className="empty-message">검색 결과가 없습니다.</p>
      ) : (
        <section className="movie-list">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default MovieList;
