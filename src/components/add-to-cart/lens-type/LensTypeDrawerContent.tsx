import { Button } from "@/components/ui/button";
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import React from "react";
import LensTypeForm from "./LensTypeForm";
import { Cross1Icon } from "@radix-ui/react-icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { MdKeyboardArrowRight, MdWhatsapp } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { AddToCart } from "@/actions/cart";
import frameOnly from "/public/assets/image/AddToCart/FrameOnly.webp";

const LensTypeDrawerContent = ({
  categoryId,
  productDetails,
  isLoggedIn,
  isFrameOnly,
}: any) => {
  // console.log(productDetails)
  function createMarkup(html: any) {
    return {
      __html: html,
    };
  }
  return (
    <DrawerContent>
      <DrawerHeader className="text-left">
        <div className="flex items-center justify-between mx-1">
          <DrawerTitle>What do you wear</DrawerTitle>
          <DrawerClose asChild>
            <Cross1Icon />
          </DrawerClose>
        </div>
      </DrawerHeader>
      <ScrollArea className=" max-h-[80vh] overflow-auto">
        {isFrameOnly ? (
          <div
            className="space-y-2 w-12/12 px-4"
            onClick={() => {
              AddToCart(
                parseInt(productDetails?.productId),
                parseInt(productDetails?.id)
              );
            }}
          >
            <div className="flex">
              <Image
                src={frameOnly}
                alt={"Frame only"}
                width={50}
                height={50}
              />

              <Label
                className={`peer-checked:bg-blue-500 peer-checked:text-white px-3 rounded-md cursor-pointer`}
              >
                <h4 className="text-md font-bold capitalize">Frame Only</h4>
                <div
                  className="text-gray-600 font-normal mt-2 text-sm"
                  dangerouslySetInnerHTML={createMarkup(
                    " <p>Buy Only Frame</p>"
                  )}
                />
              </Label>

              <div className="ml-auto">
                <MdKeyboardArrowRight className="text-2xl" />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <LensTypeForm
          isFrameOnly={isFrameOnly}
          categoryId={categoryId}
          productDetails={productDetails}
          isLoggedIn={isLoggedIn}
        />
      </ScrollArea>

      <DrawerFooter className="pt-2">
        <div className="">
          <Separator />
          <div className="flex gap-1 items-center pt-2">
            <FaWhatsapp color="green" />
            <p>Get Expert Help on Whatsapp</p>
          </div>
        </div>
      </DrawerFooter>
    </DrawerContent>
  );
};

export default LensTypeDrawerContent;
