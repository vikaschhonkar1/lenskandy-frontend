"use client";

import { Card } from "@/components/ui/card";
import { config } from "@/config";
import Image from "next/image";
import React from "react";
import { BsDot } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DeleteFromCart } from "@/actions/cart/add-to-cart";
import { CustomToast } from "@/components/generic-components/custom-toast";
import { DeleteFromWishlist } from "@/actions/wishlist/add-to-wishlist";

const WishlistProductCard = ({ data }: any) => {
  const handleDelete = async () => {
    const res = await DeleteFromWishlist(data?.id);
    CustomToast(res || "Item Removed successfully");
  };
  return (
    <Card className="flex justify-center gap-7 py-2 mx-2 mt-8">
      <div className="pl-5 flex flex-col justify-center">
        <Image
          className=" mt-3 rounded"
          src={config.site.apiimageBaseUrl + data?.variant?.mainImage}
          alt="banner"
          height={135}
          width={135}
        />
        <div className="flex">
          <div className="h-[20px] w-[50px] bg-[#FFF2F2] rounded-3xl mt-1 mr-3 flex pl-1 items-center">
            <Image
              className="h-3 w-3"
              src="/assets/image/categoriesImages/ratingStar.png"
              alt="banner"
              height={90}
              width={190}
            />
            <span className="text-[12px] ml-1">4.7+</span>
          </div>
          <div className="h-[20px] w-[30px] bg-[#FFF2F2] rounded-3xl mt-1 mr-3 flex pl-1 items-center">
            <span className="text-[12px] ml-1 font-[600]">M</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-start  mr-3 w-full">
        <div>
          <div className="flex gap-32 mb-1 items-center">
            <h2 className="font-[600] text-[12px] text-gray-600">
              {data?.product?.brand?.name}
            </h2>
          </div>
          <p className="font-[600] text-[13px]">
            {data?.product?.name} {" | "} {data?.variant?.frameColor?.name}
          </p>
          <div className="flex gap-1 text-gray-500 text-[12px] items-center">
            <span>{data?.product?.frameType?.name}</span>
            <BsDot />
            <span>{data?.product?.frameSize?.name}</span>
          </div>

          <div className="flex justify-between items-center text-md mt-1 font-normal">
            <div className="font-bold">Price: </div>
            <div className="font-bold">{`₹${data?.variant?.price}`}</div>
          </div>
        </div>

        <Popover>
          <PopoverTrigger>
            <HiOutlineDotsHorizontal />
          </PopoverTrigger>
          <PopoverContent className="w-36 p-0">
            <ul className="text-[14px] font-[500]">
              {/* <li className="pb-2 hover:bg-slate-200 cursor-pointer p-2">
                Move to WishList
              </li> */}
              <li
                onClick={() => handleDelete()}
                className=" hover:bg-slate-200 cursor-pointer p-2"
              >
                Remove
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </Card>
  );
};

export default WishlistProductCard;
