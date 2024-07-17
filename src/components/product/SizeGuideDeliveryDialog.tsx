"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";
import { ScrollAreaScrollbar } from "@radix-ui/react-scroll-area";
import { usePathname } from "next/navigation";

const frameSizeMapping = {
  "Extra Narrow": "XS",
  "extra-narrow": "XS",
  Medium: "M",
  medium: "M",
  Oversize: "XL",
  oversize: "XL",
  Large: "L",
  large: "L",
  Small: "S",
  small: "S",
};

const SizeGuide = () => {
  return (
    <div className="h-full">
      <div className="pb-2">
        New to the eyewear world and looking for your perfect fit? The most
        important measurement to know is your frame width, as that’s what we
        base all our sizes on at Lenskandy.
      </div>
      <div className="m-2">
        <Image
          src={"/assets/images/sizeguide/size-guide-img1.webp"}
          width={400}
          height={70}
          alt="size-guide"
        />
      </div>
      <div className="py-2">
        New to the eyewear world and looking for your perfect fit? The most
        important measurement to know is your frame width, as that’s what we
        base all our sizes on at Lenskandy.
      </div>
      <div className="py-2">
        New to the eyewear world and looking for your perfect fit? The most
        important measurement to know is your frame width, as that’s what we
        base all our sizes on at Lenskandy.
      </div>
      <div className="text-orange-500 my-2 font-medium">
        Other Useful Measurements
      </div>
      <div>
        <Image
          src={"/assets/images/sizeguide/size-guide-img2.webp"}
          width={100}
          height={70}
          alt="size-guide"
        />
      </div>
      <div className="text-orange-500">Temple (arm) length</div>
      <div className="py-2">
        The temple should fit evenly and horizontally along the side of your
        head and rest comfortably on your ear.
      </div>
      <div className="pb-2">
        All frame measurements can be found in the details tab on our product
        pages. For more help finding your perfect pair of glasses, see our
        complete Size Guide.
      </div>
    </div>
  );
};

const SizeGuideDeliveryDialog = ({ productDetails }: any) => {
  

  const pathName = window.location.href;

  const [pincode, setPincode] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setPincode(value);
    }
  };
  const handleCheck = () => {
    if (/^\d{6}$/.test(pincode)) {
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 2);
      const options = { weekday: "short", day: "numeric", month: "short" };//@ts-ignore
      const formattedDate = deliveryDate.toLocaleDateString("en-GB", options);
      setMessage(
        `<div class="mt-2 p-2 bg-gray-100 text-green-600 rounded-md">
          <p class="font-[1px] text-sm">✅ Home Delivery by ${formattedDate}</p>
          <p class="font-[1px] text-sm">✅ Easy 14 days Return & Exchange</p>
        </div>`
      );
    } else {
      setMessage(
        `<div class="mt-2 p-2 bg-gray-100 text-red-600 rounded-md">
          <p class="font-[1px] text-sm">❌ Pincode is invalid</p>
        </div>`
      );
    }
  };
  return (
    <section>
      <div className=" bg-white shadow-md rounded-lg p-4 max-w-sm mx-auto">
        <div className="flex justify-between">
          {" "}
          <div className=" top-4 left-4 flex items-center">
            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">
                {
                  //@ts-ignore
                  frameSizeMapping[productDetails?.product?.frameSize?.name]
                }
              </span>
            </div>
            <div className="ml-2">
              <div className="flex items-center">
                <span className="text-sm font-medium underline text-gray-800">
                  <Dialog>
                    <DialogTrigger>
                      <span className="text-sm font-medium underline text-gray-800">
                        Size Guide
                      </span>
                    </DialogTrigger>
                    <DialogContent className="h-[90vh]">
                      <DialogHeader>
                        <div className="text-orange-600 font-large text-xl">
                          Size Guide
                        </div>
                      </DialogHeader>
                      <ScrollArea>
                        <DialogDescription className="h-full">
                          <SizeGuide />
                        </DialogDescription>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                </span>
              </div>
              <span className="text-xs text-gray-600">
                {`${productDetails?.product?.lensWidth}-${productDetails?.product?.bridgeWidth}-${productDetails?.product?.templeLength}`}{" "}
                mm
              </span>
            </div>
          </div>
          <a
            href={`https://wa.me/917703911937?text=Hi%20Lenskandy,%20help%20me%20get%20started!%20I%20need%20help%20with%20product%20${pathName}`}
            target="_blank"
            className=" top-4 right-4"
          >
            <button className="flex space-between gap-2 bg-blue-900 text-white rounded-lg py-2 px-3 text-xs font-bold flex items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0854 2.91005C16.164 1.98398 15.0665 1.24972 13.8569 0.750108C12.6473 0.250493 11.3499 -0.0044801 10.0402 5.95695e-05C4.55276 5.95695e-05 0.0804022 4.45005 0.0804022 9.91003C0.0804022 11.66 0.542714 13.36 1.40704 14.86L0 20L5.27638 18.62C6.73367 19.41 8.37186 19.83 10.0402 19.83C15.5276 19.83 20 15.38 20 9.92003C20 7.27004 18.9648 4.78005 17.0854 2.91005ZM10.0402 18.15C8.55276 18.15 7.09548 17.75 5.81909 17L5.51759 16.82L2.38191 17.64L3.21608 14.6L3.01508 14.29C2.18869 12.977 1.74989 11.4593 1.74874 9.91003C1.74874 5.37004 5.46734 1.67005 10.0301 1.67005C12.2412 1.67005 14.3216 2.53005 15.8794 4.09005C16.6507 4.85401 17.262 5.76271 17.6778 6.76346C18.0936 7.76422 18.3056 8.83714 18.3015 9.92003C18.3216 14.46 14.603 18.15 10.0402 18.15ZM14.5829 11.99C14.3317 11.87 13.1055 11.27 12.8844 11.18C12.6533 11.1 12.4925 11.06 12.3216 11.3C12.1508 11.55 11.6784 12.11 11.5377 12.27C11.397 12.44 11.2462 12.46 10.995 12.33C10.7437 12.21 9.9397 11.94 8.99497 11.1C8.25126 10.44 7.75879 9.63003 7.60804 9.38003C7.46734 9.13003 7.58794 9.00003 7.71859 8.87003C7.82914 8.76003 7.96985 8.58003 8.09045 8.44003C8.21105 8.30003 8.26131 8.19004 8.34171 8.03004C8.42211 7.86004 8.38191 7.72004 8.32161 7.60004C8.2613 7.48004 7.75879 6.26004 7.55779 5.76004C7.35678 5.28004 7.14573 5.34004 6.99497 5.33004H6.51256C6.34171 5.33004 6.0804 5.39004 5.84925 5.64004C5.62814 5.89004 4.98492 6.49004 4.98492 7.71004C4.98492 8.93003 5.8794 10.11 6 10.27C6.1206 10.44 7.75879 12.94 10.2513 14.01C10.8442 14.27 11.3065 14.42 11.6683 14.53C12.2613 14.72 12.804 14.69 13.2362 14.63C13.7186 14.56 14.7136 14.03 14.9146 13.45C15.1256 12.87 15.1256 12.38 15.0553 12.27C14.9849 12.16 14.8342 12.11 14.5829 11.99Z"
                  fill="white"
                />
              </svg>
              BUY ON CHAT
            </button>
          </a>
        </div>
        {/* Size Icon */}

        {/* Checkout Delivery */}
        <div className="my-3 mb-1">
          <span className="text-sm font-medium text-gray-800">
            Checkout Delivery
          </span>
        </div>

        {/* Enter Pincode */}
        <div>
          <div className="mt-1 flex border rounded-md shadow-sm bg-white gap-1 p-2 w-full">
            <input
              type="text"
              placeholder="Enter Pincode"
              className="flex-grow text-sm font-medium text-gray-500 pl-2"
              value={pincode}
              onChange={handleInputChange}
            />
            <button
              className="text-orange-600 font-medium pr-2"
              onClick={handleCheck}
            >
              Check
            </button>
          </div>
          <div dangerouslySetInnerHTML={{ __html: message }} />
        </div>
      </div>
    </section>
  );
};

export default SizeGuideDeliveryDialog;
