import React, { useEffect } from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import { FETCH_MOVIES_URL } from "../assets/const";
import { useDispatch } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRated,
  addUpcoming,
} from "../store/movieSlice.js";
import { useSelector } from "react-redux";
import Hero from "../components/Browse/Hero.jsx";
import MovieLists from "../components/Browse/MovieLists.jsx";

function Browse() {
  const dispatch = useDispatch();

  const nowPlayingMovies = useFetchMovies(FETCH_MOVIES_URL.nowPlaying);
  const popularMovies = useFetchMovies(FETCH_MOVIES_URL.popular);
  const topRatedMovies = useFetchMovies(FETCH_MOVIES_URL.topRated);
  const upcomingMovies = useFetchMovies(FETCH_MOVIES_URL.upcoming);

  dispatch(addNowPlayingMovies(nowPlayingMovies));
  dispatch(addPopularMovies(popularMovies));
  dispatch(addTopRated(topRatedMovies));
  dispatch(addUpcoming(upcomingMovies));

  return (
    <div>
      <Hero />
      <MovieLists />
    </div>
  );
}

export default Browse;
