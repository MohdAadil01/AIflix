import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

function MovieLists() {
  const nowPlayingMovies = useSelector((state) => state.movies.nowPlaying);
  const topRatedMovies = useSelector((state) => state.movies.topRated);
  const upcomingMovies = useSelector((state) => state.movies.popular);
  const popularMovies = useSelector((state) => state.movies.popular);
  return (
    <div>
      <MoviesList title="Trending Movies" movies={nowPlayingMovies} />
      <MoviesList title="Top Rated" movies={topRatedMovies} />
      <MoviesList title="Popular" movies={popularMovies} />
      <MoviesList title="Upcoming Movies" movies={upcomingMovies} />
    </div>
  );
}

export default MovieLists;
