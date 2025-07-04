"use client";
import Image from "next/image";
import "./globals.css";
import Navbar from "./components/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/card";

export default function Home() {
  const [userdata, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    setUserData(response.data.products);
    console.log(response.data.products);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Navbar />
      <h1 className=" text-pink-700 text-4xl font-bold px-15 py-7">
        Popular products
      </h1>
      <div className=" flex justify-center  flex-wrap items-center gap-6 py- px-5 text-2xl ">
        {userdata.map((item, ind) => {
          return (
            <>
              <div>
                <Card
                  key={ind}
                  title={item.title}
                  photo={item.thumbnail}
                  brand={item.brand}
                  price={item.price}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
