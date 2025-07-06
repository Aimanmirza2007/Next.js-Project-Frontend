import React from "react";
import { FaArrowRight } from "react-icons/fa";

const FeatureProducts = () => {
  return (
    <>
      {/* Heading */}
      <h1 className="text-4xl mt-10 text-pink-700 font-bold text-center underline">
        Feature Products
      </h1>
      {/* Main div */}
      <div className="mt-5 px-12 py-8 flex flex-col md:flex-row justify-center gap-20 items-center ">
        {/* Feature Product 1 */}
        <div className="relative w-80 brightness-70 duration-300 transition mt-5  ">
          <img src="/feature1.png" alt="" className="w-full h-auto" />
          <div className="absolute bottom-10 left-8 hover:-translate-y-4 duration-300  text-white">
            <p className="text-xl lg:text-2xl font-medium mb-1">
              Unparalleled Sound
            </p>
            <p className="text-sm lg:text-base mx-w-60  font-medium ">
              Experience crystal -clear audio with premium headphone
            </p>
            <button className="flex items-center font-medium mt-2  gap-2 bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded cursor-pointer">
              Buy now <FaArrowRight />
            </button>
          </div>
        </div>
        {/* Feature Product 2 */}
        <div className="relative w-80 brightness-70 duration-300 transition  mt-5">
          <img src="/feature2.png" alt="" className="w-full h-auto" />
          <div className="absolute bottom-10 left-8 hover:-translate-y-4 duration-300  text-white">
            <p className="text-xl lg:text-2xl font-medium mb-1">
              Stay Connected
            </p>
            <p className="text-sm lg:text-base mx-w-60  font-medium ">
              Compact and stylish earphones for every occasion.
            </p>
            <button className="flex items-center font-medium mt-2 cursor-pointer  gap-2 bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded">
              Buy now <FaArrowRight />
            </button>
          </div>
        </div>
        {/* Feature Product 3 */}
        <div className="relative w-80 brightness-70 duration-300 transition  mt-5">
          <img src="/feature3.png" alt="" className="w-full h-auto" />
          <div className="absolute bottom-10 left-8 hover:-translate-y-4 duration-300  text-white">
            <p className="text-xl lg:text-2xl font-medium mb-1">
              Power in Every Pixel
            </p>
            <p className="text-sm lg:text-base mx-w-60  font-medium ">
              Shop the latest laptops for work, gaming, and more.
            </p>
            <button className="flex items-center cursor-pointer font-medium mt-2  gap-2 bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded">
              Buy now <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      {/* Main div */}
    </>
  );
};

export default FeatureProducts;
