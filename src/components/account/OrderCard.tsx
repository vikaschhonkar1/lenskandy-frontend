import React from "react";
import { Card } from "../ui/card";
import { BsDot } from "react-icons/bs";
import Image from "next/image";
import { config } from "@/config";
import Link from "next/link";

const OrderCard = (props: any) => {
  const { data } = props;

  return (
    <Card className="flex flex-col gap-4 py-2 mx-2 mt-1">
      {data.items.map((item: any, index: number) => (
        <div key={index} className="flex gap-7">
          <div className="flex flex-col justify-center items-center" style={{ flex: '0 0 30%' }}>
            <Image
              className="mt-3 rounded"
              src={config.site.apiimageBaseUrl + item.variant.mainImage}
              alt="banner"
              height={70}
              width={70}
            />
          </div>

          <Link href={"/account/orders/" + data.orderId} style={{ flex: '1 1 70%' }}>
            <div className="flex justify-between items-start w-full">
              <div>
                <div className="flex gap-32 mb-1 items-center">
                  <h2 className="font-[600] text-[12px] text-gray-600">
                    {item.product.brand.name}
                  </h2>
                </div>
                <p className="font-[600] text-[13px]">
                  {item.product.name} {" | "} {item.variant.frameColor.name}
                </p>
                <div className="flex gap-1 text-gray-500 text-[12px] items-center">
                  <span>{item.product.frameType.name}</span>
                  <BsDot />
                  <span>{item.product.frameSize.name}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Card>
  );
};

export default OrderCard;
