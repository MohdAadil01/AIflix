import React, { useEffect } from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import { FETCH_MOVIES_URL } from "../assets/const";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/movieSlice.js";
import { useSelector } from "react-redux";
import Hero from "../components/Browse/Hero.jsx";
import MoviesList from "../components/Browse/MoviesList.jsx";

function Browse() {
  const dispatch = useDispatch();

  const nowPlayingMovies = useFetchMovies(FETCH_MOVIES_URL.nowPlaying);

  dispatch(addNowPlayingMovies(nowPlayingMovies));

  return (
    <div>
      <Hero />
      <MoviesList />
    </div>
  );
}

export default Browse;
