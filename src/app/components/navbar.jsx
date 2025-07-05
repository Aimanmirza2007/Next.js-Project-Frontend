import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleBtn = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="flex justify-between px-15 text-white py-5   items-center w-full fixed top-0 left-0 bg-gradient-to-l from-[#e280aa] via-purple-800   z-50   ">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#d8387d] via-purple-700 to-[#3582e7] bg-clip-text text-transparent">
            Shopping
          </h1>
        </div>
        <div>
          <ul className="md:flex justify-center mt-3 hidden gap-10 text-xl font-bold items-center uppercase  ">
            <li className="cursor-pointer text-pink-800">Home</li>
            <li className="cursor-pointer text-pink-800">About</li>
            <li className="cursor-pointer text-pink-800">Contact</li>
            <li className="cursor-pointer text-pink-800">Products</li>
          </ul>
          {toggle ? (
            <RxCross2
              className="block md:hidden text-3xl cursor-pointer font-bold"
              onClick={toggleBtn}
            />
          ) : (
            <RiMenuFill
              className="block md:hidden text-3xl cursor-pointer font-bold"
              onClick={toggleBtn}
            />
          )}
        </div>
      </div>
      {toggle && (
        <div className="fixed top-0 left-0 w-full h-90 z-50 sm:hidden backdrop-blur-md bg-black/10 text-pink-800 py-10 flex flex-col items-center justify-center">
          <ul className="flex flex-col gap-8 text-2xl font-bold items-center uppercase">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
          <RxCross2
            className="absolute top-5 right-7 text-3xl text-white cursor-pointer"
            onClick={toggleBtn}
          />
        </div>
      )}
    </>
  );
}

export default Navbar;
