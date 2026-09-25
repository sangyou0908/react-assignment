import { Route, Routes } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";
import MovieSearch from "./components/MovieSearch";

function App() {
  return (
    <>
      <header className="app-header">
        <div className="app-header-inner">
          <div className="app-header-title">
            <h1>Movie App</h1>
          </div>

          <div className="header-auth">
            {/* TODO: AuthButton을 만들고 이 위치에 표시합니다. */}
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<MovieSearch />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
