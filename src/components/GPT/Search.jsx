import React from "react";

function Search() {
  return (
    <div className="flex justify-center items-center py-4">
      <form className="flex items-center w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow bg-zinc-800 text-white py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button
          type="submit"
          className="bg-red-600 text-white py-2 px-4 rounded-r-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
