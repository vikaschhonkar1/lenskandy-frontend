import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { RxDotFilled } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import APISERVICES from "@/lib/api-services";

const Page = async ({ params }: any) => {
  const orderId = params?.id;
  console.log(orderId);
  const res = await APISERVICES.order.get(orderId);
  console.log(res?.data);
  return (
    <>
      <section>
        <Card className="m-4">
          <section className=" border-b-2 border-dotted border-slate-500 pb-[4px]  flex gap-3  items-center">
            <div className="mx-2">
              <Image
                src="/assets/image/categoriesImages/box.png"
                alt=""
                height={5}
                width={30}
                className="py-2"
              />
            </div>
            <div className="text-[#F2652F] ">
              <h5 className="font-[600] text-[12px]">Arriving date ,01 Feb</h5>
              <h6 className="font-[400] text-[10px]">Order Created</h6>
            </div>
          </section>
          <section className=" my-2">
            {res?.data?.items?.map((item: any, index: number) => {
              return (<div key={item} className="flex gap-6 items-center mt-3">
              <div className="mx-4 py-3">
                <Image
                  src="/assets/image/categoriesImages/cartGlass.png"
                  alt="CartGlass"
                  height={100}
                  width={90}
                />
              </div>
              <div>
                <h5 className="text-nowrap text-[15px] font-[500] ">
                  {/* {res?.items?.[0]?.product?.name} */}
                  {res?.data?.items?.[0]?.product?.name}
                </h5>
                <h5 className="font-[500] text-[15px]">
                  
                  ({res?.data?.items?.[0]?.lensPackage?.name})
                </h5>
              </div>
            </div>)
            })
            
            
            }
            {/*<div className="mx-2">
              <h2 className="text-[12px] font-[600]" >Tracking Details</h2>
              <div className="mx-2 flex flex-col">
               
                <span>Order Created</span>
              </div>
  </div>*/}
            {/* <TrackingCard/> */}
          </section>
        </Card>
      </section>
      <section className=" border-b-2 border-dotted border-slate-500 pb-1">
        <Card className="m-3 py-3 px-4">
          <h3 className="text-[15px] font-[500]">Need Help?</h3>
        </Card>
      </section>
      <section className="my-3 ml-2">
        <div className="flex justify-between mx-4 my-4">
          <h4 className="font-[500]">Delivery Address:</h4>
          {/* <span className="text-[#F2652F]">Edit</span> */}
        </div>
        <div className="mx-4 pb-4">
          <h4 className="font-[500] pb-1">{res?.data?.address?.name}</h4>
          <h4 className="font-[500] text-gray-400">
            {" "}
            {res?.data?.address?.street}, {res?.data?.address?.city},{" "}
            {res?.data?.address?.state}
          </h4>
          <h4 className="font-[500] text-gray-400">
            (+91)-{res?.data?.address?.phone}
          </h4>
          <h4 className="font-[500] text-gray-400">
            {res?.data?.address?.postalCode}
          </h4>
        </div>
        {/* <div className="mx-4">
          <h5 className="font-[500] pb-3">Price Breakup:</h5>
          <h5 className="font-[500]">
            Sub total: ₹{res?.data?.items?.[0]?.variant?.price}
          </h5>
          <h5 className="font-[500] pb-3">Discount: 0</h5>
          <h5 className="font-[500]">
            Total: ₹{res?.data?.items?.[0]?.variant?.price}
          </h5>
        </div> */}
      </section>
      <section className="m-3 mb-5">
        <Card className="flex justify-center py-3">
          <h5 className="font-[600] text-[19px]">
            <span className="text-[#F2652F] font-[700]">
              ₹{res?.data?.total} -{" "}
            </span>
            Total Including GST
          </h5>
        </Card>
      </section>
    </>
  );
};

export default Page;
