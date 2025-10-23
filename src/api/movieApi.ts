import axios from "axios";
import type { Movie } from "../types";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async (): Promise<Movie[]> => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );
  return data.results;
};

export const searchMovie = async (query: string): Promise<Movie[]> => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );

  return data.results;
};
