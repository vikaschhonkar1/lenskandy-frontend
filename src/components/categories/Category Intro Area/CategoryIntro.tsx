import { Card } from "@/components/ui/card";
import React from "react";
import FeaturedProducts from "./FeaturedProducts";

type categoryIntroProps = {
  categoryName: string;
  categoryDescription: string;
}

const CategoryIntro = (props: categoryIntroProps) => {
  const {categoryName, categoryDescription} = props
  return (
    <section className="relative mt-[-35px]">
      {/* <div className="bg-white w-full h-[288px] shadow-md rounded-t-3xl pt-[3px]"> */}
      <div className="bg-white w-full  shadow-md rounded-t-3xl pt-[3px]">
        <h1 className="mt-[20px] ml-[18px] text-[18px]">
          {categoryName} at Affordable Prices
        </h1>
        <h3 className="ml-[18px] font-thin text-gray-500">
          {categoryDescription}
        </h3>

        {/* <FeaturedProducts /> */}
      </div>
    </section>
  );
};

export default CategoryIntro;
