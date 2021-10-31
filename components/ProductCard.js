import Image from "next/image";
import React from "react";

const ProductCard = ({ name, width, height }) => {
  return (
    <div className="inline-block cursor-pointer">
      <div
        className="h-full py-4 mx-4 overflow-x-hidden hover:shadow-lg transition-all duration-500 ease-in-out"
        style={{
          background: "#FFFFFF",
          border: "1px solid #E0E0E0",
          borderRadius: "6px",
          width: "255px",
        }}
      >
        <div
          className="flex flex-col justify-center items-center transform hover:scale-105 transition-all duration-500 ease-in-out"
          style={{ height: "229px" }}
        >
          <Image
            src={`/products/${name.toLowerCase()}.png`}
            height={height}
            width={width}
          />
        </div>
        <hr className="w-screen" />
        <div className="p-4" style={{ height: "80px", color: "#545454" }}>
          {name}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
