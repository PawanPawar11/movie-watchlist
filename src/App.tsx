import { Routes, Route } from "react-router";
import MovieListPage from "./pages/MovieListPage";
import WatchListPage from "./pages/WatchListPage";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div className="p-4 bg-blue-950">
      <Navigation />
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/watchlist" element={<WatchListPage />} />
      </Routes>
    </div>
  );
};

export default App;
