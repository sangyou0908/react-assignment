import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

function MovieDetail() {
  // TODO 4. useParams()를 사용하여 현재 URL의 id를 가져오세요.
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovieDetail() {
      setIsLoading(true);
      setError("");

      try {
        const token = import.meta.env.VITE_TMDB_TOKEN;

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`,
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

        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieDetail();
    // TODO 5. Effect에서 사용하는 반응형 값 id를 의존성 배열에 작성하세요.
  }, []);

  if (isLoading) {
    return <p>영화 정보를 불러오는 중입니다...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section>
      <Link className="back-link" to="/">
        목록으로 돌아가기
      </Link>

      <div className="movie-detail">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <div>
          <h2>{movie.title}</h2>
          <p>평점: {movie.vote_average.toFixed(1)}</p>
          <p>개봉일: {movie.release_date}</p>
          <p>{movie.overview}</p>
        </div>
      </div>
    </section>
  );
}

export default MovieDetail;
