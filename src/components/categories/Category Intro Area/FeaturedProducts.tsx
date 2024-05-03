import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const FeaturedProducts = () => {
  const imagePaths = [
    "/assets/image/categoriesImages/model01.png",
    "/assets/image/categoriesImages/model02.png",
    // Add more image paths as needed
  ];
  return (
    <div className="flex justify-around mt-3">
      {imagePaths.map((path, index) => (
        <div key={index}>
          <Card className="bg-white h-[190px] w-[164px]">
            <Image
              className="w-[164px] h-[188px] "
              src={path}
              alt="banner"
              height={135}
              width={135}
            />
            <p className="mt-[-50px] text-white p-3 text-[18px] ">
              Lorem ipsum{" "}
            </p>
            <Image
              className="w-[35px] h-[35px] mt-[-40px] ml-[115px] "
              src="/assets/image/categoriesImages/sideArrow.png"
              alt="banner"
              height={135}
              width={135}
            />
          </Card>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
