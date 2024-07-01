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
import { config } from "@/config";

type TabsContent = {
  tabData: {
    value: string;
    label: any;
    content: React.ReactNode;
    contentReal: any;
    descImage: string;
    glasses: string[];
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

      {tabData?.map((item) => {
        
        return (
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
                  <a href={`/${item?.value}`} className="text-xs">
                    View All
                  </a>
                </div>
                {item?.contentReal?.map((item: any) => (
                  <div key={item}>
                    <TrendingProduct
                      image={config.site.apiimageBaseUrl + item?.mainImage}
                      data={item}
                    />
                  </div>
                ))}
              </section>
            </>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}

export const CategoryTabs = ({ data }: any) => {
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
                    link: "/eyeglasses/gender/male",
                  },
                  {
                    Image: "/assets/images/Eyeglasses/Women.png",
                    label: "Women",
                    link: "/eyeglasses/gender/female",
                  },
                  {
                    Image: "/assets/images/Eyeglasses/Kids.png",
                    label: "Kids",
                    link: "/eyeglasses/gender/kids",
                  },
                  {
                    Image: "/assets/images/Eyeglasses/Reading.png",
                    label: "Reading",
                    link: "/reading-glasses",
                  },
                  {
                    Image: "/assets/images/Eyeglasses/Accessories.png",
                    label: "Accessories",
                    link: "/accessories",
                  },
                ]}
              />
            </div>
          ),
          contentReal: data?.eyeglasses,
          descImage: "/assets/images/EyeGlasses/DescImage.png",
          glasses: [
            "/assets/images/EyeGlasses/One.png",
            "/assets/images/EyeGlasses/Two.png",
            "/assets/images/EyeGlasses/Three.png",
          ],
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
                    link: "/sunglasses/gender/male",
                  },
                  {
                    Image: "/assets/images/SunGlasses/Women.png",
                    label: "Women",
                    link: "/sunglasses/gender/female",
                  },
                  {
                    Image: "/assets/images/SunGlasses/Kids.png",
                    label: "Kids",
                    link: "/sunglasses/gender/kids",
                  },
                  {
                    Image: "/assets/images/SunGlasses/WithPower.png",
                    label: "With Power",
                    link: "/sunglasses/prescription/power",
                  },
                ]}
              />
            </div>
          ),
          contentReal: data?.sunglasses,
          descImage: "/assets/images/SunGlasses/DescImage.png",
          glasses: [
            "/assets/images/SunGlasses/One.png",
            "/assets/images/SunGlasses/Two.png",
            "/assets/images/SunGlasses/Three.png",
          ],
        },
        {
          value: "computer-glasses",
          label: "Computer Glasses",
          content: (
            <div className="flex pt-2">
              <CustomAvatar
                data={[
                  {
                    Image: "/assets/images/ComputerGlasses/re.png",
                    label: "Men",
                    link: "/computer-glasses/gender/male",
                  },
                  {
                    Image: "/assets/images/ComputerGlasses/Women.png",
                    label: "Women",
                    link: "/computer-glasses/gender/female",
                  },
                  {
                    Image: "/assets/images/ComputerGlasses/Kids.png",
                    label: "Kids",
                    link: "/computer-glasses/gender/kids",
                  },
                  {
                    Image: "/assets/images/ComputerGlasses/BLueBlock.png",
                    label: "Blue Block",
                    link: "/computer-glasses/lens-technology-sunglasses/blue-block",
                  },
                ]}
              />
            </div>
          ),
          contentReal: data?.computerglasses,
          descImage: "/assets/images/ComputerGlasses/DescImage.png",
          glasses: [
            "/assets/images/ComputerGlasses/One.png",
            "/assets/images/ComputerGlasses/Two.png",
            "/assets/images/ComputerGlasses/Three.png",
          ],
        },
        {
          value: "contact-lenses",
          label: "Contact Lenses",
          content: (
            <div className="flex pt-2">
              <CustomAvatar
                data={[
                  {
                    Image: "/assets/images/ContactLenses/Men.png",
                    label: "Men",
                    link: "/contact-lenses/gender/male",
                  },
                  {
                    Image: "/assets/images/ContactLenses/Women.png",
                    label: "Women",
                    link: "/contact-lenses/gender/female",
                  },
                  {
                    Image: "/assets/images/ContactLenses/Kids.png",
                    label: "Kids",
                    link: "/contact-lenses/gender/kids",
                  },
                  {
                    Image: "/assets/images/ContactLenses/BlueRock.png",
                    label: "Blue Block",
                    link: "/contact-lenses/lens-technology/blue-block",
                  },
                ]}
              />
            </div>
          ),
          contentReal: data?.contactlenses,
          descImage: "/assets/images/ContactLenses/DescImage.png",
          glasses: [
            "/assets/images/ContactLenses/One.png",
            "/assets/images/ContactLenses/Two.png",
            "/assets/images/ContactLenses/Three.png",
          ],
        },
      ]}
    />
  );
};
