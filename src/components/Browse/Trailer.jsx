import React from "react";
import useFetchTrailer from "../../hooks/useFetchTrailer.js";

function Trailer({ id }) {
  const { trailerData, errorMessage } = useFetchTrailer(id);

  if (!trailerData) {
    return (
      <div className="relative h-screen bg-black flex items-center justify-center">
        <p className="text-white">Loading trailer...</p>
      </div>
    );
  }

  return (
    <div className="relative h-screen bg-black w-screen">
      {trailerData?.key ? (
        <iframe
          className="w-screen h-screen"
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${trailerData?.key}?&autoplay=1&mute=1&modestbranding=1&autohide=1&showinfo=0&controls=0`}
          title="Movie Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white">Trailer not available</p>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-75"></div>
    </div>
  );
}

export default Trailer;
