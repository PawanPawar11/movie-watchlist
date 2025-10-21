import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
}

const MovieListPage = () => {
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
  return (
    <div className="grid grid-cols-5 gap-4">
      {popularMovies.map((movie, id) => (
        <div
          key={id}
          className="flex flex-col justify-center items-center rounded-sm gap-4 border-1"
        >
          {/* <p className="text-lg text-white">Title: {movie.title}</p> */}
          <p className="text-lg text-white">
            Original Title: {movie.original_title}
          </p>
          <img
            className="w-40 h-60"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default MovieListPage;
