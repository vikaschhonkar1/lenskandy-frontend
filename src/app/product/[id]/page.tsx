import { CustomAvatar } from "@/components/home-page/CustomAvatar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MdWhatsapp } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ProductNav from "@/components/product/ProductNav";
import ProductDetail from "@/components/product/ProductDetail";
import CouponCard from "@/components/product/CouponCard";
import APISERVICES from "@/lib/api-services";
import { LensTypeDrawerDialog } from "@/components/add-to-cart/lens-type/LensTypeDrawerDialog";
import { accessToken } from "@/hooks/useAuth";

const getSKUFromURL = (slug: string): string => {
  const parts = slug.split("_");
  return parts[parts.length - 1];
};

const Page = async ({ params }: any) => {
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
  const skuId = getSKUFromURL(params?.id);
  const res = await APISERVICES.productVariants.get(skuId);
  const isLoggedIn = await accessToken();
  const data = {};
  return (
    <>
      <ProductNav
        productName={res?.data?.product?.name}
        frameColor={res?.data?.frameColor?.name}
      />
      <ProductDetail data={res?.data} />
      <CouponCard />
      <Card>
        <section className="mt-4">
          <div className="flex justify-between px-5 pb-4 pt-1">
            <div className="">
              <div className="flex items-center gap-2">
                <CustomAvatar>
                  <AvatarFallback className="bg-[#F2652F] text-white font-semibold text-xl">
                    {
                      //@ts-ignore
                      data?.product?.frameSize?.name
                        ?.charAt(0)
                        ?.toUpperCase() || "A"
                    }
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
              {
                //@ts-ignore
                data?.product?.frameType?.description
              }
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
            <h5 className="text-[20px] font-[500] pl-2">
              Explore More Product
            </h5>
            <p className="pt-2 text-[12px] font-[400] text-gray-500 pl-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              ex perferendis veritatis quas accusamus
            </p>
            <section className="grid grid-cols-2 gap-4  p-3 mt-4 mb-7 ">
              {[1, 2, 4, 3]?.map((item, index) => (
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
                      <p
                        className="h-[8px] w-[14px] text-[16
                
                px]  pt-2 font-medium text-black mb-[42px]"
                      >
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
              <LensTypeDrawerDialog
                categoryId={res?.data?.product?.Category?.id}
                productDetails={res?.data}
                isLoggedIn = {isLoggedIn ? true : false}
              />
            </section>
          </div>
        </>
      </section>
    </>
  );
};

export default Page;
