import React from "react";
import MovieCard from "./MovieCard";

function MoviesList({ title, movies }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bol font-semibold tracking-wide mb-4">
        {title}
      </h1>
      <div className="flex overflow-x-scroll">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            popularity={movie.popularity}
            rating={movie.vote_average}
            imagePath={movie.backdrop_path}
          />
        ))}
      </div>
    </div>
  );
}

export default MoviesList;
