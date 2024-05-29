import Image from "next/image";
import React from "react";
import { Card } from "../ui/card";
import APISERVICES from "@/lib/api-services";
import ProductVariantCard from "./ProductVariantCard";

async function RelatedProducts({ productId }: { productId: number }) {
  console.log(productId);

  const { data = [] } = await APISERVICES.relatedVariantsbyProductId.get(
    productId
  );
//   console.log(data);

  return (
    <section className="grid grid-cols-2 gap-4  p-3 mt-4 mb-7 ">
        {/* //@ts-ignore */}
      {
      //@ts-ignore
      data?.map((item, index) => (
        <>
          <ProductVariantCard
            key={item?.sku}
            variantDetail={item}
            index={index}
          />
          {/* <Card key={index} className="w-full mb-2 rounded-sm">
          <div className=" w-full bg-gradient-to-t from-[#DDDAD0] via-[#E0D7CD] to-[#DBD8CD] rounded-t-sm pt-2 flex flex-col">
            <span className="rounded-3xl  w-[80px] bg-[#F2652F] text-[12px] font-[500] px-[2px] py-[3px] text-white ml-1 align-middle">
              Upto 30% off
            </span>
            <Image
              className="h-[70px] w-full mt-1"
              src="/assets/image/categoriesImages/lens02.png"
              alt="banner"
              height={90}
              width={190}
            />
            <div className="flex justify-end pr-1 pb-2">
              <div className="h-[34px]  p-[6px] bg-white rounded-full mt-3">
                <Image
                  className="h-5 w-5"
                  src="/assets/image/homePageImages/cart.png"
                  alt="Logo"
                  height={18}
                  width={18}
                />
              </div>
            </div>
          </div>
          <div className="w-full pl-2  ">
            <h3 className="text-[10px] font-semibold pt-2 ">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p className="text-[13px] font-medium text-gray-400 pt-1">
              MODEL5487
            </p>
            <div className="flex justify-between items-center content-center w-full mt-[-6px]">
              <p
                className="h-[8px] w-[14px] text-[16
      
      px]  pt-2 font-medium text-black mb-[42px]"
              >
                ₹3,999
              </p>
            </div>
            <div className="h-5 w-full rounded-b-sm  bg-gradient-to-r from-white to-[#eace8b]  ">
              <p className="text-[8px] flex justify-end text-[#AB7500] p-1 pr-2">
                Buy 1 Get 1 + Free Membership
              </p>
            </div>
          </div>
        </Card> */}
        </>
      ))}
    </section>
  );
}

export default RelatedProducts;
