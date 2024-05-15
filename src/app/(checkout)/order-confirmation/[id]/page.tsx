"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';

const Page = ({params}: any) => {

  const orderId = params?.id;
  const router = useRouter();
  
  return (
    <>
     <div className="flex justify-center pt-52 pb-6">
        <Image
          className="h-[90px] w-[90px]"
          src="/assets/image/categoriesImages/orderConfrm.png"
          alt="lens"
          height={20}
          width={20}
        />
      </div>
      <div className="text-center">
        <h1 className="text-center font-[700] text-[27px]">Order Confirmed.</h1>
        <h2 className="tracking-wider py-2 text-black font-[600]">Thanks for Shopping with us.</h2>
        <p className="text-center py-2 text-gray-400 p-[5px]">
          You will receive an order confirmation email shortly with the expected
          delivery date.
        </p>
      </div>
      <div className="flex justify-center gap-4 text-center items-center" onClick={()=> router.push(`/order-summary/${orderId}`)}>
        <h4 className="text-[#F2652F] text-[26px] border-b-2 border-dotted border-[#F2652F] font-[500]">Go to Your Orders</h4>
        <IoIosArrowForward className="mt-[4px] text-[#F2652F]" />
      </div>
      <div className="flex justify-center gap-4 text-center items-center" onClick={() => router.push("/")}>
        <h4 className="text-[#555] border-b-2 border-dotted border-[#555] font-[500]">Go to Your Home</h4>
        <IoIosArrowForward className="mt-[4px] text-[#555]" />
      </div>
      
    </>
  )
}

export default Page