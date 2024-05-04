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

const LensTypeDrawerContent = () => {
  return (
    <DrawerContent>
      <DrawerHeader className="text-left">
        <DrawerTitle>Which eyeglasses do you wear?</DrawerTitle>
      </DrawerHeader>
      <LensTypeForm/>
      <DrawerFooter className="pt-2">
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  );
};

export default LensTypeDrawerContent;
