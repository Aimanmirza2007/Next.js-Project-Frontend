import React from "react";

const Hero = () => {
  return (
    <>
      {/* Main div */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 mt-30 px-6 md:px-16 py-10">
        {/* Left */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-700">
            Premium Wireless Headphones
          </h2>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
            Experience immersive sound with deep bass and crystal-clear highs.
            Up to 40 hours battery life, noise cancellation, and ultra comfort
            fit.
          </p>
          <button className="mt-6 px-5 py-2 cursor-pointer bg-pink-700 hover:bg-pink-800 rounded-full text-white font-semibold transition">
            Shop Now
          </button>
        </div>
        {/* Left*/}
        {/* Right */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/slide1.png"
            alt="Headphones"
            className="w-full max-w-[400px] object-contain"
          />
        </div>
        {/* Right*/}
      </div>
      {/* Main div */}
    </>
  );
};

export default Hero;
