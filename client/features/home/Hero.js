import React from "react";
import "../../../public/style.css";
// import video from "../../public/lakeVid.mp4"

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src="https://cdn.coverr.co/videos/coverr-lago-di-braies-4640/1080p.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/50"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg">
          Visit North America's Heritage Sites
        </h1>
      </div>
    </div>
  );
};

export default Hero;
