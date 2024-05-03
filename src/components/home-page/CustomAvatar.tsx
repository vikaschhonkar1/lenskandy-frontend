


"use client";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function CustomAvatar({ data = [] }: any) {
  return (
    <ScrollArea className="w-full rounded-md flex">
      <div className="w-max flex content-center items-center  justify-around ">
        {data?.map((item: any, index: number) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={item.Image}
              alt="avatar"
              height={79}
              width={67}
              className="oval mt-[5px] mr-1 "
            />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <ScrollBar className="mt-6 hidScrollbar" orientation="horizontal" />
    </ScrollArea>
  );
}
