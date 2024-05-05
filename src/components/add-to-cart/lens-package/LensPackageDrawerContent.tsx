import { Button } from "@/components/ui/button";
import {
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import React from "react";
import LensPackageForm from "./LensPackageForm";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Cross1Icon } from "@radix-ui/react-icons";

const LensPackageDrawerContent = ({ selectedId }: any) => {
  return (
    <DrawerContent>
      <DrawerHeader className="text-left">
        <div className="flex items-center justify-between mx-1">
          <DrawerTitle>Choose Lens Package</DrawerTitle>
          <DrawerClose asChild>
            <Cross1Icon />
          </DrawerClose>
        </div>
      </DrawerHeader>
      <ScrollArea className="pb-5 max-h-[80vh] overflow-auto">
        <LensPackageForm id={selectedId} />
      </ScrollArea>
      <DrawerFooter className="pt-2"></DrawerFooter>
    </DrawerContent>
  );
};

export default LensPackageDrawerContent;
