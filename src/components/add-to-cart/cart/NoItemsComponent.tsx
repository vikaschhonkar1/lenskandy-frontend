"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const NoItemsComponent = () => {
  const router = useRouter();
  return (
    <>
      <div className="sticky top-0 z-10 bg-white mt-[1px] shadow-lg p-3">
        <div className=" w-full h-full ">
          <header className="flex justify-between items-center h-full">
            <p
              onClick={() => router?.back()}
              className="text-[18px] ml-2 flex flex-start items-center font-light "
            >
              <FaArrowLeftLong className="mr-3 " />
              <span className="text-[18px] font-[700]">Cart</span>
            </p>
          </header>
        </div>
      </div>
      <div className="flex items-center justify-center  bg-gray-100 m-2">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-gray-700 mb-4">
            You have no items in your shopping cart.
          </p>
          <div className="mb-4">
            <Image src="/assets/images/cart/no-item.jpg" alt="Shopping Cart" width={300} height={300} />
          </div>
          <p className="text-gray-500 mb-6">Add items to it now.</p>
          <div className=" flex gap-2 flex-col">
            <button onClick={() => router.push("/eyeglasses")} className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
              Shop Eyeglasses
            </button>
            <button onClick={() => router.push("/sunglasses")} className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
              Shop Sunglasses
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoItemsComponent;
