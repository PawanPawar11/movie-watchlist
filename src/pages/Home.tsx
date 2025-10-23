import { useState } from "react";
import type { Movie } from "../types";
import { useQuery } from "@tanstack/react-query";
import { getPopularMovies, searchMovie } from "../api/movieApi";
import MovieCard from "../components/MovieCard";

const Home: React.FC = () => {
  const [query, setQuery] = useState("");

  const { data: movies = [], isLoading } = useQuery<Movie[]>({
    queryKey: ["movies", query],
    queryFn: () => (query ? searchMovie(query) : getPopularMovies()),
  });

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search a movie name..."
          className="bg-blue-500 rounded-md p-2 mb-2 outline-none border-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {isLoading ? (
        <p className="text-white text-center mt-4">Loading...</p>
      ) : (
        <div className="grid grid-cols-5 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
