import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { AddToWishlist } from "@/actions/wishlist/add-to-wishlist";
import { Heart } from "lucide-react";
import { accessToken } from "@/hooks/useAuth";
import { CustomToast } from "../generic-components/custom-toast";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { FaHeart } from "react-icons/fa6";

function WishlistIcon({ variantId, productId, active = false }) {
  // const isLoggedIn = await accessToken();
  return (
    <Button
      variant="ghost"
      className="rounded-full h-10 w-10 p-0 m-0"
      onClick={async () => {
        const msg = await AddToWishlist(
          parseInt(productId),
          parseInt(variantId)
        );
        if (typeof msg == "string") {
          CustomToast(msg);
        }
      }}
    >
      {active ? (
        <FaHeart color="#ff4d00" className="h-6 w-6 " />
      ) : (
        <Heart className="h-6 w-6 " />
      )}
    </Button>
  );
}

export default WishlistIcon;
