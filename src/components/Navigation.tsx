import { Link } from "react-router";

const Navigation = () => {
  return (
    <>
      <nav className="flex pb-2 gap-2 border-b-2 border-red-500">
        <Link
          to="/"
          className="text-xl text-white bg-blue-500 px-6 py-2 rounded-sm cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/watchlist"
          className="text-xl text-white bg-blue-500 px-6 py-2 rounded-sm cursor-pointer"
        >
          Watchlist
        </Link>
      </nav>
    </>
  );
};

export default Navigation;
