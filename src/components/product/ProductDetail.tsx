"use client"
import Image from 'next/image'
import React from 'react'
import { MdWhatsapp } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ProductNav from "@/components/product/ProductNav";

const ProductDetail = (props: any) => {
    const {data} = props
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      );
  return (
    <section>
        <div className="h-[57px] mt-4">
          <div className="container w-full ">
            <section className="flex justify-between">
              <span className="rounded-full h-[28px] w-18 bg-[#F2652F] text-[14px] text-white ml-1 px-2 py-1">
                30% off
              </span>

              <section className="md:ml-auto flex bg  gap-6 items-center ">
                <a className=" hover:text-gray-900">
                  <Image
                    src={"/assets/image/categoriesImages/share.png"}
                    alt="Logo"
                    height={18}
                    width={18}
                  />
                </a>
                <a className=" hover:text-gray-900">
                  <Image
                    src="/assets/image/categoriesImages/heart.png"
                    alt="Logo"
                    height={18}
                    width={18}
                  />
                </a>
              </section>
            </section>
          </div>
        </div>
        {/* <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="h-[203px] w-full"
        >
          <CarouselContent>
          
            { //@ts-ignore
            (data?.mainImage || data?.images?.length
              ? [//@ts-ignore
                  data?.mainImage,//@ts-ignore
                  ...data?.images?.map((item: any) => item?.path),
                ]
              : [
                  "/assets/image/categoriesImages/catBanner01.png",
                  "/assets/image/homePageImages/caursel01.png",
                  "/assets/image/homePageImages/caursel02.png",
                  "/assets/image/homePageImages/caursel03.png",
                  "/assets/image/homePageImages/caursel04.png",
                ]
            ).map((item, index) => (
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
        </Carousel> */}
        <div className="flex justify-between bg-gradient-to-b from-transparent to-blue-100 h-12 w-full">
          <a className="flex items-center ">
            <Image
              className="h-[26px] w-[26px] mt-3 ml-4"
              src="/assets/image/categoriesImages/colors.png"
              alt="colors"
              height={18}
              width={18}
            />
            <span className="text-gray-500 text-[10px] mt-3 ml-1 font-[600]">
              {//@ts-ignore
              data?.product?.Variant?.length || 1}{" "}
              {//@ts-ignore
              (data?.product?.Variant?.length || 1) > 1 ? "Color" : "Colors"}
            </span>
          </a>
          <a>
            <div className="flex items-center mr-2 mt-4">
              <span className="text-[8px] border-2 px-2 rounded-[3px] font-semibold">
                Try On
              </span>
              <Image
                className="h-[26px] w-[26px]"
                src="/assets/image/categoriesImages/lensTry.png"
                alt="colors"
                height={18}
                width={18}
              />
            </div>
          </a>
        </div>
        <section>
          <div className="px-2 pt-4 pb-[105px] h-[90px] w-full border-b-2 border-dotted border-gray-500 flex justify-between">
            <div className="ml-2">
              <h1 className="text-[18px] font-[700] capitalize">
                {//@ts-ignore
                data?.product?.name || "Lorem Ipsum"} ({data?.frameColor?.name || "New"}{" "}
                )
              </h1>
              <h5 className="text-[14px] text-gray-500 font-[500] pb-2">
                Product Id: {//@ts-ignore
                data?.sku || "LK001"}
              </h5>
              <span className="text-[#000080] text-[23px] font-[700]">
                ₹{//@ts-ignore
                data?.price || 200}
              </span>
            </div>
            <div className="h-[20px] w-[58px] bg-[#FFF2F2] rounded-3xl mt-1 mr-3 flex pl-1 items-center">
              <Image
                className="h-4 w-4 "
                src="/assets/image/categoriesImages/ratingStar.png"
                alt="banner"
                height={90}
                width={190}
              />
              <span className="text-[15px] ml-1">4.7+</span>
            </div>
          </div>
        </section>
      </section>
  )
}

export default ProductDetail