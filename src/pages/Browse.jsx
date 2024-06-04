import React from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import { FETCH_MOVIES_URL } from "../assets/const";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/movieSlice.js";

function Browse() {
  const dispatch = useDispatch();
  const nowPlayingMovies = useFetchMovies(FETCH_MOVIES_URL.nowPlaying);

  dispatch(addNowPlayingMovies(nowPlayingMovies));

  return <div>Browse</div>;
}

export default Browse;
