import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";

export function TabStyle2() {
  return (
    <div className=" bg-white h-full m-4 mt-[53px] pl-2 pr-2 pt-2 rounded-lg  ">
      <Tabs defaultValue="collection" className="w-full ">
        <ScrollArea className="w-full rounded-md flex">
          <TabsList className="flex my-2 w-max bg-transparent text-color-none border-none ">
            <TabsTrigger
              value="collection"
              className="inline-block rounded-3xl text-gray-400 mr-1 border-2 border-gray-200 
            data-[state=active]:bg-[#0000B7] data-[state=active]:text-white data-[state=active]:shadow"
            >
              The Collection
            </TabsTrigger>
            <TabsTrigger
              value="engraving"
              className="inline-block rounded-3xl text-gray-400 mr-2 border-2 border-gray-200 
            data-[state=active]:bg-[#0000B7] data-[state=active]:text-white data-[state=active]:shadow"
            >
              Engraving
            </TabsTrigger>
            <TabsTrigger
              value="prints"
              className="inline-block rounded-3xl text-gray-400 mr-2 py-1 border-2 border-gray-200 
            data-[state=active]:bg-[#0000B7] data-[state=active]:text-white data-[state=active]:shadow"
            >
              Prints
            </TabsTrigger>
            <TabsTrigger
              value="Embossing"
              className="inline-block rounded-3xl text-gray-400 mr-2 py-1 border-2 border-gray-200 
            data-[state=active]:bg-[#0000B7] data-[state=active]:text-white data-[state=active]:shadow"
            >
              Embossing
            </TabsTrigger>
            <TabsTrigger
              value="embrosing"
              className="inline-block rounded-3xl text-gray-400 mr-2 py-1 border-2 border-gray-200 
            data-[state=active]:bg-[#0000B7] data-[state=active]:text-white data-[state=active]:shadow"
            >
              Embossing
            </TabsTrigger>
          </TabsList>
          <ScrollBar className="mt-6 hidScrollbar" orientation="horizontal" />
        </ScrollArea>
        <TabsContent value="collection">
          <div className="w-full  ">
            <Image
              className=" w-full ml-1  object-fill"
              src="/assets/image/homePageImages/newProduct01.png"
              alt="banner"
              height={125}
              width={135}
            />
          </div>
        </TabsContent>
        <TabsContent value="engraving">
          <div className="w-full  ">
            <Image
              className=" w-full ml-1  object-fill"
              src="/assets/image/homePageImages/newProduct01.png"
              alt="banner"
              height={125}
              width={135}
            />
          </div>
        </TabsContent>
        <TabsContent value="prints">
          <div className="w-full  ">
            <Image
              className=" w-full ml-1  object-fill"
              src="/assets/image/homePageImages/newProduct01.png"
              alt="banner"
              height={125}
              width={135}
            />
          </div>
        </TabsContent>
        <TabsContent value="Embossing">
          <div className="w-full  ">
            <Image
              className=" w-full ml-1  object-fill"
              src="/assets/image/homePageImages/newProduct01.png"
              alt="banner"
              height={125}
              width={135}
            />
          </div>
        </TabsContent>
        <TabsContent value="embrosing">
          <div className="w-full  ">
            <Image
              className=" w-full ml-1  object-fill"
              src="/assets/image/homePageImages/newProduct01.png"
              alt="banner"
              height={125}
              width={135}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
