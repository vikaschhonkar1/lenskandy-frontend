"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
// import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LensTypeDrawerContent from "./LensTypeDrawerContent";

export function LensTypeDrawerDialog(props: any) {
  const {categoryId, productDetails, isLoggedIn,isFrameOnly} = props
  // console.log(productDetails)
  const [open, setOpen] = React.useState(false);
  // const isDesktop = useMediaQuery("(min-width: 768px)")
  const isDesktop = false;
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-[#F2652F] text-white w-full text-[18px] "
        >
          Buy Now
        </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when yoe done.
            </DialogDescription>
          </DialogHeader>
          
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="bg-[#F2652F] text-white w-full text-[18px] "
        >
          Buy Now
        </Button>
      </DrawerTrigger>
      <LensTypeDrawerContent isFrameOnly={isFrameOnly} categoryId={categoryId} productDetails={productDetails} isLoggedIn={isLoggedIn}/>
    </Drawer>
  );
}


