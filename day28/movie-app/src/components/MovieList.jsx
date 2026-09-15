import MovieCard from "./MovieCard.jsx";

const movie1 = {
  title: "인셉션",
  rating: 8.8,
  poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
};

const movie2 = {
  title: "인터스텔라",
  rating: 8.7,
  poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
};

const movie3 = {
  title: "다크 나이트",
  rating: 9.0,
  poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
};

function MovieList() {
  return (
    <section className="movie-list">
      <MovieCard movie={movie1} />
      <MovieCard movie={movie2} />
      <MovieCard movie={movie3} />
    </section>
  );
}

export default MovieList;
