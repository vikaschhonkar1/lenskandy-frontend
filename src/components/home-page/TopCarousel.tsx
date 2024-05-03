"use client";
import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function TopCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="h-[203px] w-full">
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
    </Carousel>
  );
}
