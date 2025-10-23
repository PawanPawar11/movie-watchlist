import { Routes, Route } from "react-router";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import WatchListPage from "./pages/WatchListPage";

const App = () => {
  return (
    <div className="p-4 bg-blue-950 min-h-screen">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<WatchListPage />} />
      </Routes>
    </div>
  );
};

export default App;
