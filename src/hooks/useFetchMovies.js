import { useEffect, useState } from "react";
import { API_OPTIONS } from "../assets/const";

const useFetchMovies = (url) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await fetch(url, API_OPTIONS);

    const results = await response.json();

    setMovies(results.results);
  };
  useEffect(() => {
    fetchMovies();
  }, []);
};
export default useFetchMovies;
