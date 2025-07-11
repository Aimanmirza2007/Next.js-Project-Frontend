import React from "react";

const Footer = () => {
  return (
    <>
      {/* Main div */}
      <div className="text-gray-500 flex flex-col justify-between items-start gap-10 md:flex-row  px-8 md:px-25 py-20 ">
        <div >
          <h1 className="text-3xl text-pink-700 font-bold  ">
            Shopping
          </h1>
          <p className="w-75 text-justify mt-5 text-sm font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div> 
          <h1 className="text-2xl font-bold text-pink-700 mb-5 ">Company</h1>
          <p className="text-sm font-medium mb-2 ">Home</p>
          <p className="text-sm font-medium mb-2" >About</p>
          <p className="text-sm font-medium mb-2 ">Contact us</p>
          <p className="text-sm font-medium mb-2 ">products</p>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-pink-700 mb-5">Get in touch</h1>
          <p className="text-sm font-medium mb-2 ">+1-234-567-890</p>
          <p className="text-sm font-medium mb-2 ">Shopping@gmail.com</p>
        </div>
      </div>

      {/* Main div */}
    </>
  );
};

export default Footer;
