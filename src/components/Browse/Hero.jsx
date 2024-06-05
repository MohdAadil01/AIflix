import React from "react";
import Trailer from "./Trailer";
import Title from "./Title";
import { useSelector } from "react-redux";

function Hero() {
  const nowPlayingMovies = useSelector((state) => state.movies?.nowPlaying);

  if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
    return null;
  }

  const nowPlaying = nowPlayingMovies[0];
  const { original_title, overview, id } = nowPlaying;

  return (
    <div className="relative h-screen">
      <Trailer id={id} />
      <Title title={original_title} overview={overview} />
    </div>
  );
}

export default Hero;
