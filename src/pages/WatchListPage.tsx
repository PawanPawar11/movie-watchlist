import { useWatchListStore } from "../store/watchListStore";
import MovieCard from "../components/MovieCard";

const WatchListPage = () => {
  const { watchlist } = useWatchListStore();

  if (watchlist.length === 0) {
    return <p className="p-4">Your watchlist is empty</p>;
  }
  return (
    <div className="grid grid-cols-5 gap-4">
      {watchlist.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default WatchListPage;
