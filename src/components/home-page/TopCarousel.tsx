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
    <div className="">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className=" w-full"
      >
        <CarouselContent>
          {[
            "/assets/images/Banner1.png",
            "/assets/images/Banner2.png",
            "/assets/images/Banner3.png",
            "/assets/images/Banner4.png",
          ].map((item, index) => (
            <CarouselItem key={index}>
              <div>
                <CardContent className=" w-full h-[260px]  flex  px-2 pt-2">
                  <Image
                    className="w-full "
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
    </div>
  );
}
