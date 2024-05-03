import { Card } from "@/components/ui/card";
import React from "react";
import FeaturedProducts from "./FeaturedProducts";

const CategoryIntro = () => {
  const imagePaths = [
    "/assets/image/categoriesImages/model01.png",
    "/assets/image/categoriesImages/model02.png",
    // Add more image paths as needed
  ];
  return (
    <section className="relative mt-[-35px]">
      <div className="bg-white w-full h-[288px] shadow-md rounded-t-3xl pt-[3px]">
        <h1 className="mt-[20px] ml-[18px] text-[18px]">
          Sunglasses at Affordable Prices
        </h1>
        <h3 className="ml-[18px] font-thin text-gray-500">
          Lorem ipsum dolor si
        </h3>

        <FeaturedProducts />
      </div>
    </section>
  );
};

export default CategoryIntro;
