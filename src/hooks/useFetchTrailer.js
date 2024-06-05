import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { API_OPTIONS } from "../assets/const";
import { addTrailer } from "../store/movieSlice.js";

const useFetchTrailer = (id) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  const trailerData = useSelector((state) => state.movies.trailer);

  const fetchTrailer = useCallback(
    async (movieId) => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const result = await response.json();
        const results = result?.results || [];
        const trailer = results.filter(
          (result) => result?.type === "Trailer"
        )[0];
        if (trailer) {
          dispatch(addTrailer(trailer));
        }
      } catch (error) {
        console.error("Failed to fetch movie trailer", error);
        setErrorMessage(error.message);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (id) {
      fetchTrailer(id);
    }
  }, [id, fetchTrailer]);

  return { trailerData, errorMessage };
};

export default useFetchTrailer;
