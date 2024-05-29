import React from "react";
import { Card } from "../ui/card";

const CouponCard = () => {
  return (
    <section className="mt-5">
      <Card className=" w-full p-2">
        <h1 className="text-[16px] pl-1">OFFERS</h1>
        <span className="rounded-full h-[22px] w-20 bg-[#FFF2F2] text-[12px] text-black px-2 py-1 font-bold">
          OFFER CODE
        </span>
        <div className="flex justify-between mt-1">
          <p className="text-[12px] text-gray-500 py-1">
            Lorem ipsum dolor sit amet Lorem
          </p>
          <span className="rounded-full w-[83px] bg-[#F2652F] text-[12px] text-white pl-1 py-1 px-1 font-[500] ml-2 items-center">
            APPLY NOW
          </span>
        </div>
      </Card>
    </section>
  );
};

export default CouponCard;
