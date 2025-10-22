import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface MovieListPageProps {
  watchListItems: Movie[];
  setWatchListItems: React.Dispatch<React.SetStateAction<Movie[]>>;
}

const MovieListPage = ({
  watchListItems,
  setWatchListItems,
}: MovieListPageProps) => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const { data } = await axios.get(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`
      );
      console.log("Axios fetched data of popular movies: ", data);
      setPopularMovies(data.results);
    };

    fetchPopularMovies();
  }, []);

  const addToWatchList = (movie: Movie) => {
    setWatchListItems([...watchListItems, movie]);
  };

  return (
    <div className="grid grid-cols-5 gap-4">
      {popularMovies.map((movie, id) => {
        const isInWatchList = watchListItems.some((m) => m.id === movie.id);

        return (
          <div
            key={id}
            className="flex flex-col justify-center items-center rounded-sm gap-4 p-2 border-1"
          >
            <p className="text-lg text-white">{movie.title}</p>
            <img
              className="w-40 h-60"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt=""
            />
            <button
              onClick={() => addToWatchList(movie)}
              className="text-sm text-white bg-blue-500 px-4 py-1 rounded-sm cursor-pointer"
            >
              {isInWatchList ? "Remove" : "Add to Watchlist"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MovieListPage;
