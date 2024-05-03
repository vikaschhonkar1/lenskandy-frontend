"use client"
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import CategoryFilters from "@/components/categories/Filter Area/CategoryFilters";
import HeroImage from "@/components/categories/Main Image Area/HeroImage";
import CategoryIntro from "@/components/categories/Category Intro Area/CategoryIntro";

const Page = ({ params }: any) => {
  console.log(params?.slug)
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const arr = params?.slug;

  let category = "sunglasses";
  let filter = {};

  if (arr && arr.length > 0) {
    category = arr[0];
    filter = {};
    for (let i = 1; i < arr.length - 1; i += 2) {
      //@ts-ignore
      filter[arr[i]] = arr[i + 1]?.split("-");
    }
  }

  

  return (
    <>
      <CategoryFilters/>
      <HeroImage/>

      <CategoryIntro/>

      <section className="grid grid-cols-2 gap-4 p-4">
        {[1, 2, 3, 4, 5, 6]?.map((item: any, index: any) => (
          <Link key={index} href={"/product/" + item?.id}>
            <Card className=" w-full rounded-xl p-2">
              <div className="flex flex-col justify-end items-end">
                <Image
                  className="mt-1 mr-1"
                  src={"/assets/image/homePageImages/wishlist.png"}
                  alt="wishlist"
                  height={18}
                  width={18}
                />
                <Carousel
                  plugins={[plugin.current]}
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                  className="h-[203px] w-full"
                >
                  <CarouselContent>
                    {[
                          "/assets/image/categoriesImages/catBanner01.png",
                          "/assets/image/homePageImages/caursel01.png",
                          "/assets/image/homePageImages/caursel02.png",
                          "/assets/image/homePageImages/caursel03.png",
                          "/assets/image/homePageImages/caursel04.png",
                        ].map((item, index) => (
                      <CarouselItem key={index}>
                        <div>
                          <CardContent className="h-[206px] w-full lg:h-[360px]  flex  p-1 ">
                            <Image
                              className="h-[204px] w-full "
                              src={item}
                              alt="item"
                              height={204}
                              width={204}
                            />
                          </CardContent>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                
              </div>
              <h1 className="text-sm mt-1 capitalize pl-1">
                {item?.product?.brand?.name}
              </h1>
              <h6 className="text-[16px] text-gray-500 capitalize pl-1">
                {item?.product?.name}
              </h6>
              <h6 className="text-[15px] font-[600] text-black capitalize pl-1">
                Size: Medium
              </h6>

              <p className=" text-[20px] font-medium text-black pl-1">
                ₹{item?.price}
              </p>
              <p className="text-gray-500 text-[14px] pl-1">
                Inclusive of all taxes
              </p>
            </Card>
          </Link>
        ))}
      </section>
      <section className="mt-4">
        <div className="h-[222px] w-full bg-black">
          <Image
            className="w-full h-[222px]"
            src="/assets/image/categoriesImages/catBanner02.png"
            alt="banner"
            height={135}
            width={135}
          />
        </div>
      </section>
    </>
  );
};

export default Page;
