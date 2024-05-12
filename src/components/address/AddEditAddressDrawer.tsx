"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  // DrawerDescription,
  // DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { FaLocationCrosshairs } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { AddEditAddressForm } from "./AddEditAddressForm";

export function AddEditAddressDrawer() {
  const [open, setOpen] = useState(false);
  const isDesktop = false;
  //   const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Address</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <AddEditAddressForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="mx-5  bg-[#F2652F] text-white text-[16px]">Add Address</Button>
      </DrawerTrigger>
      <DrawerContent className="px-5 pb-4">
        <DrawerHeader className="text-left">
          <DrawerTitle >Add delivery address</DrawerTitle>
          {/* <DrawerDescription>
              Make changes to your profile here. Click save when youre done.
            </DrawerDescription> */}
        </DrawerHeader>
        <AddEditAddressForm />
        {/* <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button
              variant="outline"
              className="bg-[#F2652F] text-white text-[18px]">
              Save
            </Button>
          </DrawerClose>
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
}
