import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Movie } from "../types";

interface WatchlistState {
  watchlist: Movie[];
  addToWatchList: (movie: Movie) => void;
  removeFromWatchList: (id: number) => void;
}
export const useWatchListStore = create<WatchlistState>()(
  persist(
    (set, get) => ({
      watchlist: [],
      addToWatchList: (movie) => {
        const exists = get().watchlist.some((m) => m.id === movie.id);
        if (!exists) {
          set({ watchlist: [...get().watchlist, movie] });
        }
      },
      removeFromWatchList: (id) => {
        set({ watchlist: get().watchlist.filter((m) => m.id !== id) });
      },
    }),
    {
      name: "watchlist-storage",
    }
  )
);
