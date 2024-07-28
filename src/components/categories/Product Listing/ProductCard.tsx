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
import WishlistIcon from "@/components/wishlist/wishlist-icon";

type ProductCardProps = {
  productDetails: any;
  index: number;
};
const ProductCard = (props: ProductCardProps) => {
  const { productDetails, index } = props;

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  if (
    productDetails &&
    productDetails?.Variant &&
    productDetails?.Variant?.length > 0
  ) {
    const redirectionURL =
      "/product/" +
      generateSlug(
        productDetails?.name,
        productDetails?.brand?.name,
        productDetails?.Variant?.[0]?.sku
      );

    return (
      <Card className=" w-full h-full rounded-xl px-2 pb-2">
        <div className="flex flex-col justify-end items-end">
          <WishlistIcon
            active={productDetails?.Variant?.[0]?.WishlistProduct ? productDetails?.Variant?.[0]?.WishlistProduct?.length > 0:false}
            // active={false}
            productId={productDetails?.Variant?.[0]?.productId}
            variantId={productDetails?.Variant?.[0]?.id}
          />
          <Link key={index} href={redirectionURL}>
            <div className=" w-full flex items-center">
              <CardContent className="w-full lg:h-[360px]  flex  p-1 ">
                <Image
                  className=" w-full "
                  src={
                    config.site.apiimageBaseUrl +
                    productDetails?.Variant?.[0]?.mainImage
                  }
                  alt="item"
                  height={204}
                  width={204}
                />
              </CardContent>
            </div>
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
          </Link>
        </div>
        <Link
          key={index}
          href={redirectionURL}
          className="flex justify-between flex-col"
        >
          <h1 className="text-sm mt-1 capitalize ">
            {productDetails?.brand?.name || "Lenskandy"}
          </h1>
          <h6 className="text-[16px] text-gray-500 capitalize line-clamp-2">
            {productDetails?.name || "Lenskandy"}
          </h6>

          <h6 className=" text-[15px] font-[500] text-black capitalize ">
            Size: {productDetails?.frameSize?.name}
          </h6>

          <p className="  text-[16px] font-medium text-black ">
            ₹{productDetails?.Variant?.[0]?.price || 34}
          </p>
          {/* <p className="text-gray-500 text-[14px] ">
            Inclusive of all taxes
          </p> */}
        </Link>
      </Card>
    );
  } else return <></>;
};

export default ProductCard;
