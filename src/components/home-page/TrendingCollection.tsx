import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
const trenCollection = [1, 2, 3];
export function TrendingCollection() {
  return (
    <>
      <div className="hidden h-[432px] w-full pl-[25px]">
        <h1 className="pt-[49px] text-[16px] font-semibold">
          Trending collections
        </h1>
        <h1 className="text-[14px] font-semibold text-[#888888]">
          Showcase your unique style
        </h1>
        <ScrollArea className="w-full rounded-md flex">
          <div className="flex">
            {trenCollection?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-[199px] h-[266px] bg-gradient-to-b from-[#45A471] to-blue-[#45A471] mt-[35px] mr-[14px] mb-2 rounded-md"
                >
                  <h1 className="text-[16px] font-semibold text-white text-center pt-5">
                    Lorem ipsum
                  </h1>
                </div>
              );
            })}
          </div>
          <ScrollBar className="mt-6 hidScrollbar" orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
}
