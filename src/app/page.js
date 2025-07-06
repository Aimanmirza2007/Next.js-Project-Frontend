"use client";
import Image from "next/image";
import "./globals.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/navbar";
import Card from "./components/card";
import Hero from "./components/hero";
import FeatureProducts from "./components/featureProducts";

export default function Page() {
  // Cards logic
  const [userdata, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    setUserData(response.data.products);
    console.log(response.data.products);
  };
  useEffect(() => {
    getData();
  }, []);
  // Cards logic
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Navbar */}

      {/* Hero section */}
      <Hero />
      {/* Hero section */}

      {/* Cards Section */}
      <h1 className=" text-pink-700 text-4xl font-bold px-15 py-7">
        Popular products
      </h1>
      <div className=" flex justify-center  flex-wrap items-center gap-6 py- px-5 text-2xl ">
        {userdata.map((item) => {
          return (
            <div key={item.id}>
              <Card
                title={item.title}
                photo={item.thumbnail}
                brand={item.brand}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
      {/* Cards Section */}
      {/* Feature Products section */}
      <FeatureProducts />
      {/* Feature Products section */}
    </>
  );
}
