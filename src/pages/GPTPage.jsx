import React from "react";
import Search from "../components/GPT/Search";
import Suggestions from "../components/GPT/Suggestions";
import { BACKGROUND_IMAGE } from "../assets/const.js";

const exampleSuggestions = [
  {
    id: 1,
    title: "Movie Title 1",
    image: "https://via.placeholder.com/150",
    description: "This is a brief description of movie 1.",
  },
  {
    id: 2,
    title: "Movie Title 2",
    image: "https://via.placeholder.com/150",
    description: "This is a brief description of movie 2.",
  },
  // Add more movie objects as needed
];

function GPTPage() {
  return (
    <div className="overflow-hidden">
      <div
        className="bg-zinc-900 w-screen h-screen"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Add an overlay to make text more readable
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">GPT Search</h2>
        </div>
        <Search />
        <Suggestions suggestions={exampleSuggestions} />
      </div>
    </div>
  );
}

export default GPTPage;
