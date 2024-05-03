import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CustomAvatar } from "./CustomAvatar";

type TabsContent = {
  tabData: {
    value: string;
    label: any;
    content: React.ReactNode;
  }[];
};

export function TabsStyle({ tabData }: TabsContent) {
  return (
    <Tabs defaultValue={tabData[0]?.value} className="my-5 mx-2">
      <ScrollArea className="w-full rounded-md flex">
        <TabsList className="flex w-max bg-transparent text-color-none border-none ">
          {tabData?.map((item) => (
            <TabsTrigger
              className=" rounded-3xl text-gray-400 mr-3 px-[9px] py-[6px] border-2 border-gray-200 
            data-[state=active]:bg-[#0000B7] data-[state=active]:text-white data-[state=active]:shadow"
              key={item?.value}
              value={item?.value}>
              {item?.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar className="mt-6 hidScrollbar" orientation="horizontal" />
      </ScrollArea>

      {tabData?.map((item) => (
        <TabsContent
          key={item?.value}
          value={item?.value}>
          <div>{item?.content}</div>
        </TabsContent>
      ))}
    </Tabs>
  );
}


export const CategoryTabs = () =>{


    return <TabsStyle
    tabData={[
      {
        value: "Sunglasses",
        label: "Eyeglasses",
        content: (
          <div className="pt-2">
            <CustomAvatar
              data={[
                {
                  Image: "/assets/image/homePageImages/eyeglasses01.png",
                  label: "Men",
                },
                {
                  Image: "/assets/image/homePageImages/eyeglasses02.png",
                  label: "Women",
                },
                {
                  Image: "/assets/image/homePageImages/eyeglasses03.png",
                  label: "Kids",
                },
                {
                  Image: "/assets/image/homePageImages/eyeglasses04.png",
                  label: "Reading",
                },
                {
                  Image: "/assets/image/homePageImages/eyeglasses04.png",
                  label: "Accessories",
                },
              ]}
            />
          </div>
        ),
      },
      {
        value: "Sunglasses2",
        label: "Sunglasses",
        content: (
          <div className="flex pt-2">
            <CustomAvatar
              data={[
                {
                  Image: "/assets/image/homePageImages/eyeglasses01.png",
                  label: "Men 2",
                },
                {
                  Image: "/assets/image/homePageImages/eyeglasses02.png",
                  label: "Women",
                },
                {
                  Image: "/assets/image/homePageImages/eyeglasses03.png",
                  label: "Child",
                },
                {
                  Image: "/assets/image/homePageImages/eyeglasses04.png",
                  label: "Men",
                },
                {
                  Image: "/assets/image/homePageImages/eyeglasses04.png",
                  label: "Men",
                },
              ]}
            />
          </div>
        ),
      },
      {
        value: "Sunglasses3",
        label: "Computer Glasses",
        content: (
          <div className="flex pt-2">
            <CustomAvatar
              data={[
                {
                  Image: "/assets/image/homePageImages/eyeglasses01.png",
                  label: "Men",
                },
                {
                  Image: "/assets/image/homePageImages/eyeglasses02.png",
                  label: "Women",
                },
                {
                  Image: "/assets/image/homePageImages/eyeglasses03.png",
                  label: "Child",
                },
                {
                  Image: "/assets/image/homePageImages/eyeglasses04.png",
                  label: "Men",
                },
                {
                  Image: "/assets/image/homePageImages/eyeglasses04.png",
                  label: "Men",
                },
              ]}
            />
          </div>
        ),
      },
      {
        value: "Sunglasses4",
        label: "Contact Glasses",
        content: (
          <div className="flex pt-2">
            <CustomAvatar
              data={[
                {
                  Image: "/assets/image/homePageImages/eyeglasses01.png",
                  label: "Men",
                },
                {
                  Image: "/assets/image/homePageImages/eyeglasses02.png",
                  label: "Women",
                },
                {
                  Image: "/assets/image/homePageImages/eyeglasses03.png",
                  label: "Child",
                },
                {
                  Image: "/assets/image/homePageImages/eyeglasses04.png",
                  label: "Men",
                },
                {
                  Image: "/assets/image/homePageImages/eyeglasses04.png",
                  label: "Men",
                },
              ]}
            />
          </div>
        ),
      },
    ]}
  />
}
