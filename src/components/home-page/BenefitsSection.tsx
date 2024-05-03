import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card } from "../ui/card";
import Image from "next/image";
const benifitBox = [1, 2, 3, 4];
export function Benefits() {
  return (
    <div className="h-[432px] w-full pl-5 ">
      <h1 className="pt-[32px] text-[#010045] pl-[25px] text-[20px] font-extrabold  ">
        Benifits of Lenskandy
      </h1>
      <ScrollArea className="w-full rounded-md flex">
        <div className="flex">
          {benifitBox?.map((item, inde) => {
            return (
              <Card
                key={inde}
                className="relative w-[199px] h-[276px] bg-gradient-to-b from-[#F2652F] to-[#000080] mt-[35px] mr-[14px] rounded-full flex justify-center items-center"
              >
                <div className="absolute top-1 w-[192px] h-[266px] bg-white rounded-full">
                  <Image
                    className="absolute w-[21px] h-[21px] mt-[11px] ml-4 top-[180px] left-[65px] "
                    src="/assets/image/homePageImages/benifitTick01.png"
                    alt="banner"
                    height={5}
                    width={5}
                  />
                </div>
              </Card>
            );
          })}
        </div>
        <ScrollBar className="mt-6 hidScrollbar" orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
