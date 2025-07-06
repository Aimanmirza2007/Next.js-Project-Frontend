import React from "react";

const Card = (props) => {
  return (
    <>
      {/* Main Div Card */}
      <div className="w-72  border-1 border-purple-700 rounded-xl shadow-md hover:shadow-[0_0px_15px_purple] overflow-hidden transform hover:scale-102  transition-all duration-300 cursor-pointer">
        {/* Card Image */}
        <img
          src={props.photo}
          alt={props.title}
          className="h-50   ml-8  object-cover"
        />
        {/* Card Image */}
        {/* Card Text */}
        <div className="p-5 text-white">
          <h2 className="text-lg font-semibold mb-1 truncate">{props.title}</h2>
          <p className="text-sm text-gray-500 mb-2">Brand: {props.brand}</p>
          <p className="text-lg font-bold text-purple-700 mb-3">
            ${props.price}
          </p>
          <button className="w-full bg-gradient-to-r from-[#db6297] via-purple-600 to-[#669ce2] text-white py-2 px-4 rounded hover:bg-emerald-700 transition">
            Buy Now
          </button>
        </div>
        {/* Card Text */}
      </div>
      {/* Main Div  Card*/}
    </>
  );
};

export default Card;
