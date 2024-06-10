import React from "react";

function Suggestions({ suggestions }) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-white mb-2">
        Suggested Movies
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {suggestions.map((movie) => (
          <div key={movie.id} className="bg-zinc-800 rounded-lg shadow-md p-4">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h4 className="text-md font-semibold text-white mt-2">
              {movie.title}
            </h4>
            <p className="text-sm text-gray-400">{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
