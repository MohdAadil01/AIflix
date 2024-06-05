import React from "react";

function Trailer() {
  return (
    <div className="relative h-screen bg-black">
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src="path/to/your/trailer.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-75"></div>
    </div>
  );
}

export default Trailer;
