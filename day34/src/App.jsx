import { Route, Routes } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";
import MovieSearch from "./components/MovieSearch";
import AuthButton from "./components/AuthButton";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <header className="app-header">
        <div className="app-header-inner">
          <div className="app-header-title">
            <h1>Movie App</h1>
          </div>

          <div className="header-auth">
            <AuthButton user={user} setUser={setUser} />
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
