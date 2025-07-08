import React from "react";

const Subscribe = () => {
  return (
    <>
      {/* Main div */}
      {/* Upper Text */}
      <div className="flex flex-col justify-center items-center pt-8 pb-14">
        <h1 className="text-2xl md:text-4xl pb-3 text-pink-700 font-medium">
          Subscribe now & get 20% off
        </h1>
        <p className="text-gray-500 md:text-base pb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        {/* Upper Text */}

        {/* Input  */}
        <div className="flex justify-between gap-2 items-center max-w-2xl w-full md:14 h-12">
          <input
            type="text"
            placeholder="Enter your email"
            className=" border border-white   px-3 outline-none  w-full rounded-md h-full text-pink-700"
          />
          <button className="md:px-12 px-5  h-full text-white rounded-md  bg-pink-700 hover:bg-pink-800 transition  cursor-pointer">
            Subscribe
          </button>
        </div>
        {/* Input  */}
      </div>
      {/* Main div */}
    </>
  );
};

export default Subscribe;
