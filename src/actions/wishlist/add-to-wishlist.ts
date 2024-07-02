"use server";
import APISERVICES from "@/lib/api-services";
import { error } from "console";
import { redirect } from "next/navigation";

const AddToWishlist = async (productId: number, variantId: number) => {
  const res = await APISERVICES.wishlist.post({
    productId,
    variantId,
  });

  if (res?.statusCode === 423) {
    redirect("?login=true");
  }

  if (res?.statusCode === 200) {
    redirect("?");
    return res?.message;
  } else {
    return res?.message;
  }
};

const DeleteFromWishlist = async (id: number) => {
  const res = await APISERVICES.wishlist.delete(id);
  if (res?.statusCode === 200) {
    // redirect("/");
  } else {
    return res?.message || res?.errors[0]?.quantity;
  }
};

export { AddToWishlist, DeleteFromWishlist };
