import "./App.css";

const title = "인셉션";
const rating = 8.8;
const poster =
  "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg";

function App() {
  return (
    <main className="container">
      <h1>Movie App</h1>
      <article className="movie-card">
        <img src={poster} alt={title} />
        <h3>{title}</h3>
        <p>평점: {rating}</p>
      </article>
    </main>
  );
}

export default App;
