import React, { useState, useEffect } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    const { data } = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    console.log("Axios fetched data of popular movies: ", data);
    setPopularMovies(data.results);
  };

  const fetchSearchMovie = async (query: string) => {
    if (query.trim() === "") {
      fetchPopularMovies();
      return;
    }

    const { data } = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );

    setPopularMovies(data.results);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    fetchSearchMovie(value);
  };

  const toggleWatchList = (movie: Movie) => {
    const alreadyInWatchList = watchListItems.some((m) => m.id === movie.id);

    if (alreadyInWatchList) {
      setWatchListItems(watchListItems.filter((m) => m.id !== movie.id));
    } else {
      setWatchListItems([...watchListItems, movie]);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search a movie name..."
        className="bg-blue-500 rounded-md p-2 mb-2 outline-none border-none"
        value={searchTerm}
        onChange={handleSearchChange}
      />
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
                onClick={() => toggleWatchList(movie)}
                className="text-sm text-white bg-blue-500 px-4 py-1 rounded-sm cursor-pointer"
              >
                {isInWatchList ? "Remove" : "Add to Watchlist"}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieListPage;
