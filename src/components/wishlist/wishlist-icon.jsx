import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { AddToWishlist } from "@/actions/wishlist/add-to-wishlist";

function WishlistIcon({ variantId, productId }) {
  return (
    // <Button
    //   variant="outline"
    //   onClick={() => {
    //     // router.push(paths.checkout.cart);

    //     AddToWishlist(parseInt(productId), parseInt(variantId));
    //   }}
    // >
      <Image
        className=" "
        src={"/assets/image/homePageImages/wishlist.png"}
        alt="wishlist"
        height={20}
        width={20}
      />
    // </Button>
  );
}

export default WishlistIcon;
