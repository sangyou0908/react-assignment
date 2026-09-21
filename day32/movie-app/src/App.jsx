import { Route, Routes } from "react-router";

import MovieDetail from "./components/MovieDetail.jsx";
import MovieSearch from "./components/MovieSearch.jsx";

function App() {
  return (
    <main className="container">
      <h1>Movie App</h1>

      {/* TODO 2.
          "/"에서는 MovieSearch,
          "/movies/:id"에서는 MovieDetail이 표시되도록
          Routes와 Route를 작성하세요.
      */}
      <MovieSearch />
    </main>
  );
}

export default App;
