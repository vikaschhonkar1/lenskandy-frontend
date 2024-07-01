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

export function MidLevelCarousel() {
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
            "/assets/images/Slider1/One.png",
            "/assets/images/Slider1/Two.png",
            "/assets/images/Slider1/Three.png",
            "/assets/images/Slider1/Four.png",
          ].map((item, index) => (
            <CarouselItem key={index}>
              <Image
                className="w-full py-2 object-fill	h-full w-full"
                alt={item}
                src={item}
                
                height={260}
                width={400}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
