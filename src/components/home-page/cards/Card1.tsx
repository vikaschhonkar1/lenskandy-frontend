import * as React from "react";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";

const cardImage = [
  "/assets/image/homePageImages/card02.png",
  "/assets/image/homePageImages/card01.png",
  "/assets/image/homePageImages/card02.png",
  "/assets/image/homePageImages/card01.png",
];
export function Card1() {
  return (
    <>
      <ScrollArea className="w-full rounded-md flex">
        <div className="flex p-2 ">
          {cardImage?.map((item, index) => {
            return (
              <div key={index} className="w-[135px] h-[135px] mr-4 shadow-md rounded-lg">
                <Image
                  className="w-full"
                  src={item}
                  alt="banner"
                  height={135}
                  width={135}
                />
              </div>
            );
          })}
        </div>
        <ScrollBar className="mt-6 hidScrollbar" orientation="horizontal" />
      </ScrollArea>
    </>
  );
}
