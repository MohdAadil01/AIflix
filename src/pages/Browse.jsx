import React from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import { FETCH_MOVIES_URL } from "../assets/const";

function Browse() {
  useFetchMovies(FETCH_MOVIES_URL.nowPlaying);

  return <div>Browse</div>;
}

export default Browse;
