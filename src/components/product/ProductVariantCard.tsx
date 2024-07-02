"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { config } from "@/config";
import { generateSlug } from "@/lib/generate-slug";
import WishlistIcon from "../wishlist/wishlist-icon";

type ProductCardProps = {
  variantDetail: any;
  index: number;
};
const ProductVariantCard = (props: ProductCardProps) => {
  const { variantDetail, index } = props;

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  if (variantDetail && variantDetail?.product && variantDetail?.product?.name) {
    const redirectionURL =
      "/product/" +
      generateSlug(
        variantDetail?.product?.name,
        variantDetail?.product?.brand?.name,
        variantDetail?.sku
      );
    return (
      <Card className=" w-full rounded-xl p-2">
        <div className="flex flex-col justify-end items-end">
          <WishlistIcon
            productId={variantDetail?.productId}
            variantId={variantDetail?.id}
            active={variantDetail?.WishlistProduct?.length > 0}
          />
          <Link key={index} href={redirectionURL}>
            <div className=" w-full flex items-center">
              <CardContent className="w-full lg:h-[360px]  flex  p-1 ">
                <Image
                  className=" w-full "
                  src={config.site.apiimageBaseUrl + variantDetail?.mainImage}
                  alt="item"
                  height={204}
                  width={204}
                />
              </CardContent>
            </div>{" "}
          </Link>
          {/* <Carousel
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              className="h-[203px] w-full"
            >
              <CarouselContent>
                {[
                  "/assets/image/categoriesImages/catBanner01.png",
                  "/assets/image/homePageImages/caursel01.png",
                  "/assets/image/homePageImages/caursel02.png",
                  "/assets/image/homePageImages/caursel03.png",
                  "/assets/image/homePageImages/caursel04.png",
                ].map((item, index) => (
                  <CarouselItem key={index}>
                    <div>
                      <CardContent className="h-[206px] w-full lg:h-[360px]  flex  p-1 ">
                        <Image
                          className="h-[204px] w-full "
                          src={item}
                          alt="item"
                          height={204}
                          width={204}
                        />
                      </CardContent>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel> */}
        </div>
        <Link key={index} href={redirectionURL}>
          <h1 className="text-sm mt-1 capitalize pl-1">
            {variantDetail?.product?.brand?.name || "Air India"}
          </h1>
          <h6 className="text-[16px] text-gray-500 capitalize line-clamp-2 pl-1">
            {variantDetail?.product?.name || "Lenskandy"}
          </h6>
          <h6 className="text-[15px] font-[500] text-black capitalize  pl-1">
            Size: {variantDetail?.product?.frameSize?.name}
          </h6>

          <p className=" text-[16px] font-medium text-black pl-1">
            ₹{variantDetail?.price || 34}
          </p>
          {/* <p className="text-gray-500 text-[14px] pl-1">
            Inclusive of all taxes
          </p> */}
        </Link>
      </Card>
    );
  } else {
    return (
      <>
        <h1></h1>
      </>
    );
  }
};

export default ProductVariantCard;
