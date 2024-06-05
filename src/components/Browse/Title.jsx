import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

function Title() {
  return (
    <div className="absolute z-10 flex flex-col items-start justify-center h-full p-8 space-y-4 text-white left-0 top-0">
      <h1 className="text-4xl font-bold lg:text-6xl">Movie Title</h1>
      <p className="max-w-lg text-lg lg:text-xl">
        This is a brief description of the movie, providing enough detail to
        intrigue viewers.
      </p>
      <div className="flex space-x-4">
        <button className="flex items-center px-4 py-2 text-lg font-semibold bg-red-600 rounded hover:bg-red-700">
          <FaPlay className="mr-2" /> Play
        </button>
        <button className="flex items-center px-4 py-2 text-lg font-semibold bg-gray-700 rounded hover:bg-gray-800">
          <FaInfoCircle className="mr-2" /> More Info
        </button>
      </div>
    </div>
  );
}

export default Title;
