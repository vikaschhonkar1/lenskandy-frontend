"use client";
import { addLoginParam } from "@/components/login";
import { Button } from "@/components/ui/button";
import { Router } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import React from "react";

const ProceedToCartButton = ({ isLoggedIn }: any) => {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      className="bg-[#F2652F] text-white w-full text-[18px] px-8 py-6"
      onClick={() => {
        if (isLoggedIn) {
          router.push("/checkout/shipping-address");
        } else {
          addLoginParam();
        }
      }}
    >
      {isLoggedIn ? "Proceed To Checkout" : "Log In to Place Order"}
    </Button>
  );
};

export default ProceedToCartButton;
