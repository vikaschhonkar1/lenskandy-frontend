"use server";
import APISERVICES from "@/lib/api-services";
import { error } from "console";
import { redirect } from "next/navigation";



const AddToCart = async (productId:number, variantId:number, lensPackageId?: number) => {
  const payload = {
    productId,
    variantId,
    ...(lensPackageId && { lensPackageId })
  }
  const res = await APISERVICES.cart.post(payload);
  if (res?.statusCode === 200) {
    redirect("/cart");
  } else {
    return res?.message;
  }
};

const UpdateToCart = async (id:number, quantity = 1) => {
  const res = await APISERVICES.cart.patch(id, {
    quantity,
  });

  if (res?.statusCode === 200) {
    redirect("/cart");
  } else {
    return res?.message || res?.errors[0]?.quantity;
  }
};

const DeleteFromCart = async (id:number) => {
  const res = await APISERVICES.cart.delete(id);
 
  if (res?.statusCode === 200) {
    redirect("/cart");
  } else {
    return res?.message || res?.errors[0]?.quantity;
  }
};


export { AddToCart, UpdateToCart, DeleteFromCart };
