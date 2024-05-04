"use client"
import { CustomAvatar } from "@/components/home-page/CustomAvatar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MdWhatsapp } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Page = ({ params }: any) => {
  const accordionData = [
    {
      id: "item-1",
      question: "Features",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      id: "item-2",
      question: "Specifications",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      id: "item-3",
      question: "Description",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    // Add more items as needed
  ];
  const data = {};
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <>
      <div className="border-0 rounded-none h-[54px] sticky top-0 z-10 bg-white mt-[1px] shadow-lg">
        <div className="container w-full ">
          <header className="flex justify-between">
            <p className="text-[18px] ml-2 flex flex-start mt-3 font-light ">
              <FaArrowLeftLong className="mr-6 mt-2" />
              <span className="capitalize">
                {" "}
                {data?.product?.name || "Lorem Ipsum"} (
                {data?.frameColor?.name || "Black"})
              </span>
            </p>
          </header>
        </div>
      </div>

      <>
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
        {/* <CarouselStyle1 data={data} /> */}
        <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="h-[203px] w-full"
    >
      <CarouselContent>
        {(data?.mainImage || data?.images?.length
          ? [data?.mainImage, ...data?.images?.map((item:any) => item?.path)]
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
    </Carousel>
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
              {data?.product?.Variant?.length || 1}{" "}
              {(data?.product?.Variant?.length || 1) > 1 ? "Color" : "Colors"}
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
      </>
      <Card>
        <section>
          <div className="px-2 pt-4 pb-[105px] h-[90px] w-full border-b-2 border-dotted border-gray-500 flex justify-between">
            <div className="ml-2">
              <h1 className="text-[18px] font-[700] capitalize">
                {data?.product?.name || "Lorem Ipsum"} ({data?.frameColor?.name}{" "}
                || "NEW")
              </h1>
              <h5 className="text-[14px] text-gray-500 font-[500] pb-2">
                Product Id: {data?.sku || "LK001"}
              </h5>
              <span className="text-[#000080] text-[23px] font-[700]">
                ₹{data?.price || 200}
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
        <section className="m-5">
          <>
            <Card className="h-[100px] w-full p-2">
              <h1 className="text-[16px] pl-1">OFFERS</h1>
              <span className="rounded-full h-[22px] w-20 bg-[#FFF2F2] text-[12px] text-black px-2 py-1 font-bold">
                OFFER CODE
              </span>
              <div className="flex justify-between mt-1">
                <p className="text-[12px] text-gray-500 py-1">
                  Lorem ipsum dolor sit amet Lorem
                </p>
                <span className="rounded-full w-[83px] bg-[#F2652F] text-[12px] text-white pl-1 py-1 px-1 font-[500] ml-2 items-center">
                  APPLY NOW
                </span>
              </div>
            </Card>
          </>
        </section>
        <section className="mt-4">
          <div className="flex justify-between px-5 pb-4 pt-1">
            <div className="">
              <div className="flex items-center gap-2">
                <CustomAvatar>
                  <AvatarFallback className="bg-[#F2652F] text-white font-semibold text-xl">
                    {data?.product?.frameSize?.name?.charAt(0)?.toUpperCase() ||
                      "A"}
                  </AvatarFallback>
                </CustomAvatar>

                <p className="underline text-[15px] font-[500] "> Size Guide</p>
              </div>
              {/* <p className="text-[8px] pt-1 pl-1">51-54mm</p> */}
            </div>

            <span className="w-[96px]  rounded-sm bg-[#2A2673] flex justify-between text-[11px] text-white px-2 items-center font-[500]">
              <MdWhatsapp className="text-white h-10 w-10 mr-2 mt-[3px] ml-[-3px]" />
              Buy On Chat
            </span>
          </div>
          <p className="mx-5 mt-[-14px] text-[16fpx] font-bold py-1">
            CheckOut Delivery
          </p>
          <div className=" mx-5 mb-8 flex border-2 rounded-md">
            <Input
              type="number"
              placeholder="Enter Pincode"
              className="h-[28px] border-none text-[14px] "
            />
            <span className="mt-[2px] text-[14px] pr-2 text-[#F2652F] font-[500]">
              Check
            </span>
          </div>
        </section>
      </Card>

      <>
        <div className="w-full flex justify-around border-b-2 border-slate-600 border-dotted mt-6 pb-5">
          <div>
            <Image
              className="h-[20px] w-[20px]"
              src="/assets/image/categoriesImages/truck.png"
              alt="truck"
              height={20}
              width={20}
            />
            <h5 className="pt-3 text-[5px] font-[700]">Fast Delivery</h5>
          </div>
          <div className="border-x-2 border-dotted border-slate-500 px-7">
            <Image
              className="h-[20px] w-[20px]"
              src="/assets/image/categoriesImages/delivery.png"
              alt="truck"
              height={20}
              width={20}
            />
            <h5 className="pt-3 text-[5px] font-[700]">Easy Return</h5>
          </div>
          <div>
            <Image
              className="h-[20px] w-[29px] pl-2"
              src="/assets/image/categoriesImages/badge.png"
              alt="truck"
              height={20}
              width={20}
            />
            <h5 className="pt-3 text-[5px] font-[700]">100% Genuine</h5>
          </div>
        </div>
      </>

      <section className="p-4 shadow-lg ">
      <>
        <div className="pb-6">
          <h5 className="text-[18px] font-[600] text-black">Frame</h5>
          <p className="pt-2 text-[12px] font-[500] text-gray-500">
            {data?.product?.frameType?.description}
          </p>
          <div>
            <Image
              className="h-[70px] w-full"
              src="/assets/image/categoriesImages/frame01.png"
              alt="truck"
              height={20}
              width={20}
            />
          </div>
          <div className="pt-7">
            <Accordion type="single" collapsible>
              {accordionData.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="font-[600] text-[15px] ">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[12px] font-[500]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </>
      </section>

      <section className="px-4 pt-4 pb-1 text-[15px]">
      <>
      <div className="mt-3">
        <h5 className="text-[20px] font-[500] pl-2">Explore More Product</h5>
        <p className="pt-2 text-[12px] font-[400] text-gray-500 pl-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex
          perferendis veritatis quas accusamus
        </p>
        <section className="grid grid-cols-2 gap-4  p-3 mt-4 mb-7 ">
          
          {[1,2,4,3]?.map((item, index) => (
        <Card key={index} className="w-full mb-2 rounded-sm">
          <div className=" w-full bg-gradient-to-t from-[#DDDAD0] via-[#E0D7CD] to-[#DBD8CD] rounded-t-sm pt-2 flex flex-col">
            <span className="rounded-3xl  w-[80px] bg-[#F2652F] text-[12px] font-[500] px-[2px] py-[3px] text-white ml-1 align-middle">
              Upto 30% off
            </span>
            <Image
              className="h-[70px] w-full mt-1"
              src="/assets/image/categoriesImages/lens02.png"
              alt="banner"
              height={90}
              width={190}
            />
            <div className="flex justify-end pr-1 pb-2">
              <div className="h-[34px]  p-[6px] bg-white rounded-full mt-3">
                <Image
                  className="h-5 w-5"
                  src="/assets/image/homePageImages/cart.png"
                  alt="Logo"
                  height={18}
                  width={18}
                />
              </div>
            </div>
          </div>
          <div className="w-full pl-2  ">
            <h3 className="text-[10px] font-semibold pt-2 ">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p className="text-[13px] font-medium text-gray-400 pt-1">
              MODEL5487
            </p>
            <div className="flex justify-between items-center content-center w-full mt-[-6px]">
              <p className="h-[8px] w-[14px] text-[16
                
                px]  pt-2 font-medium text-black mb-[42px]">
                ₹3,999
              </p>
            </div>
            <div className="h-5 w-full rounded-b-sm  bg-gradient-to-r from-white to-[#eace8b]  ">
              <p className="text-[8px] flex justify-end text-[#AB7500] p-1 pr-2">
                Buy 1 Get 1 + Free Membership
              </p>
            </div>
          </div>
        </Card>
      ))}
        </section>
        <section className="left-0 right-0 bottom-0 fixed w-full p-2">
          <Button
            variant="outline"
            className="bg-[#F2652F] text-white w-full text-[18px] "
            // onClick={async () => {
            //   const res = await AddToCart(data?.productId, data?.id, 1);
            //   if (res) {
            //     CustomToast(res);
            //   }
            // }}
          >
            SELECT LENS (Buy Now)
          </Button>
        </section>
      </div>
    </>
      </section>
    </>
  );
};

export default Page;
