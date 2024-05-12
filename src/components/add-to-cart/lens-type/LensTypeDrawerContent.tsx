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
import { MdWhatsapp } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";

const LensTypeDrawerContent = ({categoryId, productDetails, isLoggedIn}: any) => {
  // console.log(productDetails)
  return (
    <DrawerContent>
      <DrawerHeader className="text-left">
        <div className="flex items-center justify-between mx-1">
          <DrawerTitle>Which eyeglasses do you wear</DrawerTitle>
          <DrawerClose asChild>
            <Cross1Icon />
          </DrawerClose>
        </div>
      </DrawerHeader>
      <ScrollArea className=" max-h-[80vh] overflow-auto">
        <LensTypeForm categoryId={categoryId} productDetails={productDetails} isLoggedIn={isLoggedIn} />
      </ScrollArea>

      <DrawerFooter className="pt-2">
        <div className="">
          <Separator/>
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
