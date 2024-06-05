import React from "react";

function MovieCard() {
  return (
    <div className="max-w-xs mx-auto my-8">
      <div className="relative">
        <img
          src="https://via.placeholder.com/300x450"
          alt="Movie Poster"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h2 className="text-lg font-semibold">Movie Title</h2>
          <p className="text-sm text-gray-300">Genre</p>
          <div className="flex items-center mt-2">
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.155c.969 0 1.371 1.24.588 1.81l-3.367 2.448a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.538 1.118l-3.367-2.448a1 1 0 00-1.175 0l-3.367 2.448c-.783.57-1.838-.197-1.538-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.16 9.377c-.783-.57-.381-1.81.588-1.81h4.155a1 1 0 00.95-.69l1.286-3.95z" />
            </svg>
            <span className="ml-1 text-gray-300">4.5</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
