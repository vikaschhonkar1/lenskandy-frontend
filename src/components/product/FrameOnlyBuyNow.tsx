"use client"
import React from "react";
import { Button } from "../ui/button";
import { AddToCart } from "@/actions/cart";

const FrameOnlyBuyNow = ({ categoryId, productDetails }: any) => {
  return (
    <Button
      variant="outline"
      className="bg-[#F2652F] text-white w-full text-[18px] "
      onClick={() => {

        AddToCart(
          parseInt(productDetails?.productId),
          parseInt(productDetails?.id),
        );
      }}
    >
      Buy Now
    </Button>
  );
};

export default FrameOnlyBuyNow;
