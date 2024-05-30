import React from "react";
import { Card } from "../ui/card";

const CouponCard = () => {
  return (
    <section className="mx-3 mt-5">
      <Card className=" px-3 w-full p-2">
        <h1 className="text-[16px] pl-1 font-medium mb-1">OFFERS</h1>
        <span className="rounded-full  bg-[#FFF2F2] text-[10px] text-black px-2 py-1 ">
          OFFER CODE
        </span>
        <div className="flex  mt-1 gap-2">
          <p className="text-[12px] text-gray-500 py-1 px-1">
            Lorem ipsum dolor sit amet Lorem Lorem, ipsum dolor sit amet
          </p>

          <span className="rounded-2xl  bg-[#F2652F] text-[10px] text-white p-1 px-1 font-[500] h-[22px] items-center text-nowrap text-center">
            APPLY NOW
          </span>
        </div>
      </Card>
    </section>
  );
};

export default CouponCard;
