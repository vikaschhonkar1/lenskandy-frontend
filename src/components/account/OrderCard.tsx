import React from "react";
import { Card } from "../ui/card";
import { BsDot } from "react-icons/bs";
import Image from "next/image";
import { config } from "@/config";
import Link from "next/link";

const OrderCard = (props: any) => {
  const { data } = props;
  return (
    <Card className="flex justify-center gap-7 py-2 mx-2 mt-1">
      <div className="pl-5 flex flex-col justify-center">
        <Image
          className=" mt-3 rounded"
          src={config.site.apiimageBaseUrl + data?.items[0]?.variant?.mainImage}
          alt="banner"
          height={70}
          width={70}
        />
      </div>

      <Link href={"/account/orders/" + data?.orderId}>
        <div className="flex justify-between items-start  mr-3 w-full">
          <div>
            <div className="flex gap-32 mb-1 items-center">
              <h2 className="font-[600] text-[12px] text-gray-600">
                {data?.items[0]?.product?.brand?.name}
              </h2>
            </div>
            <p className="font-[600] text-[13px]">
              {data?.items[0]?.product?.name} {" | "}{" "}
              {data?.items[0]?.variant?.frameColor?.name}
            </p>
            <div className="flex gap-1 text-gray-500 text-[12px] items-center">
              <span>{data?.items[0]?.product?.frameType?.name}</span>
              <BsDot />
              <span>{data?.items[0]?.product?.frameSize?.name}</span>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default OrderCard;
