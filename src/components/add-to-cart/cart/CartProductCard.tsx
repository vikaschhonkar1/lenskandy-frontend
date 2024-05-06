"use client"

import { Card } from '@/components/ui/card';
import { config } from '@/config';
import Image from 'next/image';
import React from 'react'
import { BsDot } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
  

const CartProductCard = ({data}: any) => {
    const handleQuantity = async (qty:number) => {
        // const res = await UpdateToCart(data?.id, qty);
        // CustomToast(res || "Quantity updated successfully");
      };
      const handleDelete = async () => {
        // const res = await DeleteFromCart(data?.id);
        // CustomToast(res || "Item Removed successfully");
      };
  return (
    <Card className="flex  gap-7 py-2 mx-2 mt-8">
      <div className="pl-5">
        <Image
          className="w-24 h-24 mt-3 rounded"
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
            {data?.variant?.frameColor?.name}
            {" | "} {data?.product?.name}
          </p>
          <div className="flex gap-1 text-gray-500 text-[12px] items-center">
            <span>{data?.product?.frameType?.name}</span>
            <BsDot />
            <span>{data?.product?.frameSize?.name}</span>
          </div>
          <p
            className="font-[600] text-[13px]"
            dangerouslySetInnerHTML={{ __html: data?.product?.description }}
          />
          <form className="max-w-xs mx-auto my-2">
            <div className="relative flex items-center">
              <button
                disabled={data?.quantity == 1}
                onClick={() => handleQuantity(data?.quantity - 1)}
                type="button"
                id="decrement-button"
                data-input-counter-decrement="counter-input"
                className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
              >
                <svg
                  className="w-2.5 h-2.5 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h16"
                  />
                </svg>
              </button>
              <span className=" text-sm font-normal max-w-[2.5rem] text-center mx-3">
                {data?.quantity}
              </span>

              <button
                disabled={data?.quantity > 9}
                onClick={() => handleQuantity(data?.quantity + 1)}
                type="button"
                id="increment-button"
                data-input-counter-increment="counter-input"
                className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
              >
                <svg
                  className="w-2.5 h-2.5 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </button>
            </div>
          </form>
          <span className="font-[600] text-[14px]">
            ₹{Number(data?.variant?.price) * data?.quantity}
          </span>
        </div>

        <Popover>
          <PopoverTrigger>
            <HiOutlineDotsHorizontal />
          </PopoverTrigger>
          <PopoverContent className="w-36 p-0">
            <ul className="text-[14px] font-[500]">
              <li className="pb-2 hover:bg-slate-200 cursor-pointer p-2">
                Move to WishList
              </li>
              <li
                onClick={() => handleDelete()}
                className=" hover:bg-slate-200 cursor-pointer p-2"
              >
                Delete form cart
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </Card>
  )
}

export default CartProductCard