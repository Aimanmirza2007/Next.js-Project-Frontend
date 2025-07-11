"use client"
import { useParams } from "next/navigation";
import React from "react";

const ProductDetails = () => {
    const {id} = useParams()
  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold">Product ID: {id}</h1>
    </div>
  );
};

export default ProductDetails;