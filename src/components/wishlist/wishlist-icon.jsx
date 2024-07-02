import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { AddToWishlist } from "@/actions/wishlist/add-to-wishlist";
import { Heart } from "lucide-react";

function WishlistIcon({ variantId, productId }) {
  return (
    <Button
      variant='ghost'
      className="rounded-full h-10 w-10 p-0 m-0"
      onClick={() => {
        AddToWishlist(parseInt(productId), parseInt(variantId));
      }}
    >
      <Heart className="h-6 w-6 " />
    </Button>
  );
}

export default WishlistIcon;
