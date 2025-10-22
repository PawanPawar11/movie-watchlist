import { Routes, Route } from "react-router";
import MovieListPage, { type Movie } from "./pages/MovieListPage";
import WatchListPage from "./pages/WatchListPage";
import Navigation from "./components/Navigation";
import { useState, useEffect } from "react";

const App = () => {
  const [watchListItems, setWatchListItems] = useState<Movie[]>([]);

  useEffect(() => {
    const storedWatchList = localStorage.getItem("watchlist");
    if (storedWatchList) {
      setWatchListItems(JSON.parse(storedWatchList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchListItems));
  }, [watchListItems]);

  return (
    <div className="p-4 bg-blue-950 min-h-screen">
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <MovieListPage
              watchListItems={watchListItems}
              setWatchListItems={setWatchListItems}
            />
          }
        />
        <Route
          path="/watchlist"
          element={
            <WatchListPage
              watchListItems={watchListItems}
              setWatchListItems={setWatchListItems}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
