import React from "react";
import type { Movie } from "../types";
import { useWatchListStore } from "../store/watchListStore";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { watchlist, addToWatchList, removeFromWatchList } =
    useWatchListStore();
  const isInWatchList = watchlist.some((m) => m.id === movie.id);
  return (
    <div className="flex flex-col justify-center items-center rounded-sm gap-4 p-2 border-1">
      <img
        className="w-40 h-60"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt=""
      />
      <p className="text-lg text-white">{movie.title}</p>
      <button
        onClick={() =>
          isInWatchList ? removeFromWatchList(movie.id) : addToWatchList(movie)
        }
        className="text-sm text-white bg-blue-500 px-4 py-1 rounded-sm cursor-pointer"
      >
        {isInWatchList ? "Remove" : "Add to Watchlist"}
      </button>
    </div>
  );
};

export default MovieCard;
