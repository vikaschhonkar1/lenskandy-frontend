// import { BiLogOut } from 'react-icons/bi'

import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BiLogOut } from "react-icons/bi";
import { IoKeySharp } from "react-icons/io5";
import { url } from "inspector";
import Link from "next/link";
// import TopNav from "@/layout/root/topNav";
import { Button } from "@/components/ui/button";
// import Logout from "@/components/auth/Logout";
import { refreshTokenFn, user } from "@/hooks/useAuth";

const images = [
  {
    name: "Orders",
    imageURL: "/assets/image/categoriesImages/dashIcon1.png",
    borderColor: "#D4FDFF",
    backgroundColor: "#EDFEFF",
    url: "/dashboard/orders",
  },
  {
    name: "Wishlist",
    imageURL: "/assets/image/categoriesImages/dashIcon2.png",
    borderColor: "#FFEEB2",
    backgroundColor: "#FFF8E0",
    url: "/dashboard/orders",
  },
  {
    name: "Address",
    imageURL: "/assets/image/categoriesImages/dashIcon3.png",
    borderColor: "#FFE1F5",
    backgroundColor: "#FFF3FB",
    url: "/dashboard/orders",
  },
//   {
//     name: "Prescription",
//     imageURL: "/assets/image/categoriesImages/dashIcon4.png",
//     borderColor: "#FFE4D8",
//     backgroundColor: "#FFF5F1",
//     url: "/dashboard/orders",
//   },
//   {
//     name: "Wallet",
//     imageURL: "/assets/image/categoriesImages/dashIcon5.png",
//     borderColor: "#DEFFD9",
//     backgroundColor: "#F8FFF7",
//     url: "/dashboard/orders",
//   },
//   {
//     name: "Coupons",
//     imageURL: "/assets/image/categoriesImages/dashIcon6.png",
//     borderColor: "#E9E8FF",
//     backgroundColor: "#F6F6FF",
//     url: "/dashboard/orders",
//   },
];

async function Page() {
    const userDetails = await user()
    // console.log(userDetails)
  return (
    <>
      {/* <TopNav noSearch /> */}
      <section className="border-gray-900 w-full relative">
        <div className="h-[261px] w-full bg-cover bg-center bg-[url('/assets/image/categoriesImages/dashboard01.png')] flex justify-center gap-3 py-10">
          <Image
            className="w-16 h-16 mt-1"
            src="/assets/image/categoriesImages/dashboard7.png"
            alt="user"
            height={48}
            width={48}
          />
          <div>
            <h1 className="text-white font-[700] text-[28px]">Hello {userDetails?.name}!</h1>
            <span className="text-white font-[700] text-[22px]">
              +91 {userDetails?.phone}
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <Card className="w-[370px] h-[130px] absolute top-[150px] shadow-lg">
            <div className="grid grid-cols-3 gap-2 place-items-center  ">
              {images.map((image, index) => (
                <Link href={image.url} key={index} className="py-4 text-center">
                  <div
                    className="p-3 rounded-full"
                    style={{
                      border: `2px solid ${image.borderColor}`,
                      backgroundColor: `${image.backgroundColor}`,
                    }}
                  >
                    <Image
                      className="w-[28px] h-[28px]"
                      src={image.imageURL}
                      alt={`icon${index + 1}`}
                      height={10}
                      width={10}
                    />
                  </div>
                  <h4 className="text-[11px] font-[500] py-1">{image.name}</h4>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </section>
      <section className="mt-[40px] p-2">
        <Card className="w-full  shadow-xl">
          <h1 className="pl-3 pt-2 pb-2 text-[24px] font-[700] border-b-2">
            My Eyes
          </h1>
          <Accordion type="single" collapsible className="w-full px-2 py-1 ">
            <AccordionItem value="item-1" className="py-1">
              <AccordionTrigger className="p-3 h-1 text-[14px] ">
                My saved powers
              </AccordionTrigger>
              <AccordionContent className="p-3">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="py-1">
              <AccordionTrigger className="p-3 h-1 text-[14px]">
                My frame size
              </AccordionTrigger>
              <AccordionContent className="p-3">
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="py-1">
              <AccordionTrigger className="p-3 h-1 text-[14px]">
                Chat with and eyewear expert
              </AccordionTrigger>
              <AccordionContent className="p-3">
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="py-1">
              <AccordionTrigger className="p-3 h-1 text-[14px]">
                Call an eyewear expert
              </AccordionTrigger>
              <AccordionContent className="p-3">
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </section>
      <section className="p-2">
        <Card className="w-full shadow-xl">
          <h1 className="pl-3 pt-2 pb-2 text-[24px] font-[700] border-b-2">
            Others
          </h1>
          <div className="w-full px-2 py-1 ">
          <Button  variant="ghost" className="w-full">
    <span className="px-3 h-1 text-[18px] flex gap-2 items-center font-[500]">
      <BiLogOut />
      Logout
    </span>
  </Button>
          </div>
        </Card>
      </section>
    </>
  );
}

export default Page;
