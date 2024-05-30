import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card } from "../ui/card";
import Image from "next/image";
import BenefitOne from "../../../public/assets/icons/BenefitOne";
import BenefitTwo from "../../../public/assets/icons/BenefitTwo";
import BenefitThree from "../../../public/assets/icons/BenefitThree";

export function Benefits() {
  return (
    <div className=" w-full pl-5 ">
      <h1 className="pt-[32px] text-[#010045] pl-[25px] text-[20px] font-extrabold  ">
        Benifits of Lenskandy
      </h1>
      <ScrollArea className="w-full rounded-md flex">
        <div className="grid grid-cols-3 mt-4 mb-4">
          <BenefitOne />
          <BenefitTwo />
          <BenefitThree />
        </div>
        <ScrollBar className="mt-6 hidScrollbar" orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
