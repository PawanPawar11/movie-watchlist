import { type Movie } from "./MovieListPage";

interface MovieListPageProps {
  watchListItems: Movie[];
  setWatchListItems: React.Dispatch<React.SetStateAction<Movie[]>>;
}

const WatchListPage = ({
  watchListItems,
  setWatchListItems,
}: MovieListPageProps) => {
  const removeFromWatchlist = (movie: Movie) => {
    setWatchListItems(watchListItems.filter((m) => m.id !== movie.id));
  };

  return (
    <div className="grid grid-cols-5 gap-4">
      {watchListItems.map((movie, id) => (
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
            onClick={() => removeFromWatchlist(movie)}
            className="text-sm text-white bg-blue-500 px-4 py-1 rounded-sm cursor-pointer"
          >
            Remove from watchlist
          </button>
        </div>
      ))}
    </div>
  );
};

export default WatchListPage;
