import React from "react";
import themeVideo from "../assets/themeVideo.mp4";

const GetStarted = () => {
  return (
    <div className="">
      {/* ✅ Background Video Full Width & Height */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-screen h-screen object-cover"
        src={themeVideo}
      ></video>

      {/* ✅ Overlay for Dark Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* ✅ Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Welcome to Guardian Lens!
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
          We provide amazing services to help your business grow.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
