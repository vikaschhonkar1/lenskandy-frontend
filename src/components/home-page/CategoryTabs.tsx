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
import Image from "next/image";
import TrendingProducts, { TrendingProduct } from "./TrendingProducts";

type TabsContent = {
  tabData: {
    value: string;
    label: any;
    content: React.ReactNode;
    descImage: string;
  }[];
};

export function TabsStyle({ tabData }: TabsContent) {
  return (
    <Tabs defaultValue={tabData?.[0]?.value} className="my-5 ">
      <ScrollArea className="w-full rounded-md flex mx-2">
        <TabsList className="flex w-max bg-transparent text-color-none border-none ">
          {tabData?.map((item) => (
            <TabsTrigger
              className=" rounded-3xl text-gray-400 mr-3 px-[9px] py-[6px] border-2 border-gray-200 
            data-[state=active]:bg-[#0000B7] data-[state=active]:text-white data-[state=active]:shadow"
              key={item?.value}
              value={item?.value}
            >
              {item?.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar className="mt-6 hidScrollbar" orientation="horizontal" />
      </ScrollArea>

      {tabData?.map((item) => (
        <TabsContent key={item?.value} value={item?.value}>
          <>
            <div className="px-2">{item?.content}</div>

            <Image
              className="w-full mt-5"
              src={item?.descImage}
              alt="banner"
              height={122}
              width={371}
            />

            <section className="container my- flex flex-col gap-2 bg-[#ebe2e4] p-4">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold pb-3">Now Trendings</h1>
                <a href="#" className="text-xs">
                  View All
                </a>
              </div>
              {new Array(3).fill("")?.map((item) => (
                <div key={item} className="shadow-lg mb-3">
                  <TrendingProduct />
                </div>
              ))}
            </section>
          </>
        </TabsContent>
      ))}
    </Tabs>
  );
}

export const CategoryTabs = () => {
  return (
    <TabsStyle
      tabData={[
        {
          value: "eyeglasses",
          label: "Eyeglasses",
          content: (
            <div className="pt-2">
              <CustomAvatar
                data={[
                  {
                    Image: "/assets/images/Eyeglasses/Men.png",
                    label: "Men",
                  },
                  {
                    Image: "/assets/images/Eyeglasses/Women.png",
                    label: "Women",
                  },
                  {
                    Image: "/assets/images/Eyeglasses/Kids.png",
                    label: "Kids",
                  },
                  {
                    Image: "/assets/images/Eyeglasses/Reading.png",
                    label: "Reading",
                  },
                  {
                    Image: "/assets/images/Eyeglasses/Accessories.png",
                    label: "Accessories",
                  },
                ]}
              />
            </div>
          ),
          descImage: "/assets/images/EyeGlasses/DescImage.png",
        },
        {
          value: "sunglasses",
          label: "Sunglasses",
          content: (
            <div className="flex pt-2">
              <CustomAvatar
                data={[
                  {
                    Image: "/assets/images/SunGlasses/Men.png",
                    label: "Men",
                  },
                  {
                    Image: "/assets/images/SunGlasses/Women.png",
                    label: "Women",
                  },
                  {
                    Image: "/assets/images/SunGlasses/Kids.png",
                    label: "Kids",
                  },
                  {
                    Image: "/assets/images/SunGlasses/WithPower.png",
                    label: "With Power",
                  },
                ]}
              />
            </div>
          ),
          descImage: "",
        },
        {
          value: "computer-glasses",
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
          descImage: "",
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
          descImage: "",
        },
      ]}
    />
  );
};
