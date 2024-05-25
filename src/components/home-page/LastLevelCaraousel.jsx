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

export function LastLevelCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className=" w-full mt-2"
      >
        <CarouselContent>
          {[
            "/assets/images/Slider2/One.png",
            "/assets/images/Slider2/Two.png",
            "/assets/images/Slider2/Three.png",
            "/assets/images/Slider2/Four.png",
          ].map((item, index) => (
            <CarouselItem key={index}>
              <Image
                src={item}
                height={221}
                width={389}
                alt="Premium Eyewear"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
