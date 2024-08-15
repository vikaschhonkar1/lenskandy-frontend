"use client";
import Image from "next/image";
import React from "react";
import { MdWhatsapp } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ProductNav from "@/components/product/ProductNav";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";

const ProductDetail = (props: any) => {
  const { data, isContactLens = false } = props;
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <section>
      <div className="h-[57px] mt-4">
        <div className="px-3 w-full ">
          <section className="flex justify-between">
            {/* <span className="rounded-full h-[28px] w-18 bg-[#F2652F] text-[14px] text-white ml-1 px-2 py-1">
              30% off
            </span> */}

            {/* <section className="md:ml-auto flex bg  gap-6 items-center ">
              <a className=" hover:text-gray-900">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1182 9.64887C11.6867 9.65088 11.2613 9.7428 10.8733 9.91784C10.4852 10.0929 10.1444 10.3466 9.8761 10.6602L5.66285 8.21476C5.81641 7.75465 5.81641 7.26218 5.66285 6.80207L9.8761 4.3566C10.3037 4.84822 10.905 5.18344 11.5733 5.3029C12.2417 5.42235 12.934 5.31832 13.5277 5.00924C14.1213 4.70015 14.578 4.20596 14.8168 3.61421C15.0556 3.02246 15.061 2.37134 14.8322 1.77619C14.6035 1.18105 14.1552 0.680297 13.5668 0.362638C12.9784 0.044979 12.2879 -0.0690809 11.6176 0.0406634C10.9473 0.150408 10.3405 0.476872 9.90466 0.962226C9.46881 1.44758 9.23205 2.06049 9.23633 2.6924C9.23905 2.93169 9.27785 3.16945 9.3516 3.39875L5.13836 5.84421C4.7664 5.40948 4.25798 5.09294 3.68358 4.93848C3.10918 4.78402 2.49725 4.79928 1.93262 4.98215C1.36798 5.16503 0.8786 5.50645 0.532317 5.9591C0.186035 6.41175 0 6.95321 0 7.50841C0 8.06362 0.186035 8.60508 0.532317 9.05773C0.8786 9.51038 1.36798 9.8518 1.93262 10.0347C2.49725 10.2176 3.10918 10.2328 3.68358 10.0784C4.25798 9.92389 4.7664 9.60735 5.13836 9.17262L9.3516 11.6181C9.27785 11.8474 9.23905 12.0851 9.23633 12.3244C9.23633 12.8536 9.40534 13.3709 9.722 13.8109C10.0387 14.2509 10.4887 14.5938 11.0153 14.7963C11.5419 14.9988 12.1214 15.0518 12.6804 14.9486C13.2394 14.8454 13.7529 14.5905 14.1559 14.2163C14.559 13.8422 14.8334 13.3654 14.9446 12.8464C15.0558 12.3274 14.9988 11.7894 14.7806 11.3005C14.5625 10.8116 14.1931 10.3938 13.7192 10.0998C13.2453 9.80579 12.6881 9.64887 12.1182 9.64887ZM12.1182 1.08706C12.4601 1.08706 12.7945 1.18121 13.0788 1.35761C13.3631 1.534 13.5848 1.78472 13.7156 2.07806C13.8465 2.3714 13.8808 2.69418 13.814 3.00558C13.7473 3.31699 13.5826 3.60303 13.3408 3.82754C13.099 4.05205 12.7909 4.20495 12.4555 4.26689C12.1201 4.32883 11.7724 4.29704 11.4565 4.17554C11.1405 4.05403 10.8705 3.84827 10.6805 3.58428C10.4905 3.32028 10.3891 3.0099 10.3891 2.6924C10.3891 2.26663 10.5712 1.85831 10.8955 1.55725C11.2198 1.25619 11.6596 1.08706 12.1182 1.08706ZM2.89629 9.11375C2.55431 9.11375 2.22001 9.0196 1.93566 8.84321C1.65131 8.66681 1.42968 8.41609 1.29881 8.12275C1.16794 7.82941 1.1337 7.50663 1.20042 7.19523C1.26713 6.88382 1.43182 6.59778 1.67363 6.37327C1.91545 6.14876 2.22355 5.99586 2.55896 5.93392C2.89438 5.87198 3.24204 5.90377 3.55799 6.02527C3.87394 6.14678 4.14399 6.35254 4.33399 6.61654C4.52398 6.88053 4.62539 7.19091 4.62539 7.50841C4.62539 7.93418 4.44322 8.3425 4.11895 8.64356C3.79468 8.94462 3.35488 9.11375 2.89629 9.11375ZM12.1182 13.9298C11.7762 13.9298 11.4419 13.8356 11.1575 13.6592C10.8732 13.4828 10.6516 13.2321 10.5207 12.9388C10.3898 12.6454 10.3556 12.3227 10.4223 12.0112C10.489 11.6998 10.6537 11.4138 10.8955 11.1893C11.1373 10.9648 11.4454 10.8119 11.7808 10.7499C12.1162 10.688 12.4639 10.7198 12.7799 10.8413C13.0958 10.9628 13.3659 11.1686 13.5559 11.4326C13.7459 11.6966 13.8473 12.0069 13.8473 12.3244C13.8473 12.7502 13.6651 13.1585 13.3408 13.4596C13.0166 13.7606 12.5767 13.9298 12.1182 13.9298Z"
                    fill="#606060"
                  />
                </svg>
              </a>
              <a className=" hover:text-gray-900">
                <svg
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5 15C8.3826 14.9996 8.26863 14.9613 8.17589 14.8909C5.22166 12.6458 3.18665 10.7125 1.76267 8.80528C-0.0545013 6.36793 -0.468943 4.11767 0.529968 2.11686C1.24196 0.687706 3.2876 -0.481599 5.67861 0.199197C6.81861 0.521269 7.81324 1.21196 8.5 2.15843C9.18676 1.21196 10.1814 0.521269 11.3214 0.199197C13.7071 -0.471205 15.758 0.687706 16.47 2.11686C17.4689 4.11767 17.0545 6.36793 15.2373 8.80528C13.8134 10.7125 11.7783 12.6458 8.82411 14.8909C8.73137 14.9613 8.6174 14.9996 8.5 15ZM4.31839 1.04629C3.74946 1.02464 3.18525 1.15493 2.68631 1.4232C2.18737 1.69146 1.77255 2.08757 1.48637 2.56899C0.662802 4.22161 1.03474 6.06131 2.62343 8.18685C4.31178 10.3168 6.2888 12.2121 8.5 13.8203C10.7108 12.2137 12.6878 10.3202 14.3766 8.19205C15.9706 6.06131 16.3372 4.22161 15.5136 2.57419C14.9823 1.5348 13.3883 0.708494 11.6136 1.197C11.0446 1.36149 10.5171 1.64067 10.065 2.0166C9.61294 2.39252 9.24635 2.85685 8.98883 3.37971C8.9488 3.47502 8.8807 3.55655 8.79319 3.61392C8.70567 3.6713 8.6027 3.70193 8.49734 3.70193C8.39199 3.70193 8.28901 3.6713 8.2015 3.61392C8.11399 3.55655 8.04589 3.47502 8.00586 3.37971C7.75027 2.85554 7.38432 2.39013 6.93197 2.01397C6.47963 1.63781 5.95111 1.35941 5.38106 1.197C5.03568 1.09889 4.67804 1.04817 4.31839 1.04629Z"
                    fill="#606060"
                  />
                </svg>
              </a>
            </section> */}
          </section>
        </div>
      </div>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="h-[203px] w-full"
      >
        <CarouselContent>
          {
            //@ts-ignore
            (data?.mainImage || data?.images?.length
              ? [
                  //@ts-ignore
                  data?.mainImage, //@ts-ignore
                  ...data?.images?.map((item: any) => item?.path),
                ]
              : [
                  "/assets/image/categoriesImages/catBanner01.png",
                  "/assets/image/homePageImages/caursel01.png",
                  "/assets/image/homePageImages/caursel02.png",
                  "/assets/image/homePageImages/caursel03.png",
                  "/assets/image/homePageImages/caursel04.png",
                ]
            ).map((item, index) => (
              <CarouselItem key={index}>
                <div>
                  <CardContent className="h-[206px] w-full lg:h-[360px]  flex  p-1 ">
                    <Image
                      className="h-[204px] w-full object-contain"
                      src={item}
                      alt="item"
                      height={204}
                      width={204}
                    />
                  </CardContent>
                </div>
              </CarouselItem>
            ))
          }
        </CarouselContent>
      </Carousel>
      {/* <div className="flex justify-between bg-gradient-to-b from-transparent to-blue-100 h-12 w-full">
        <a className="flex items-center px-2 ">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="16.7285"
              width="11"
              height="11"
              rx="5.5"
              transform="rotate(-44.1887 0 16.7285)"
              fill="#FF9CA7"
            />
            <rect
              x="9.06152"
              y="26.0502"
              width="11"
              height="11"
              rx="5.5"
              transform="rotate(-44.1887 9.06152 26.0502)"
              fill="#D32F2F"
            />
            <rect
              x="9.32129"
              y="7.66724"
              width="11"
              height="11"
              rx="5.5"
              transform="rotate(-44.1887 9.32129 7.66724)"
              fill="#3693F7"
            />
            <rect
              x="18.3828"
              y="16.9889"
              width="11"
              height="11"
              rx="5.5"
              transform="rotate(-44.1887 18.3828 16.9889)"
              fill="#28C7BF"
            />
          </svg>

          <span className="text-gray-500 text-[12px]  ml-1 font-[600]">
            {
              //@ts-ignore
              data?.product?.Variant?.length || 1
            }{" "}
            {
              //@ts-ignore
              (data?.product?.Variant?.length || 1) > 1 ? "Colors" : "Color"
            }
          </span>
        </a>
         <a>
          <div className="flex items-center mr-2 mt-4">
            <span className="text-[8px] border-2 px-2 rounded-[3px] font-semibold">
              Try On
            </span>
            <Image
              className="h-[26px] w-[26px]"
              src="/assets/image/categoriesImages/lensTry.png"
              alt="colors"
              height={18}
              width={18}
            />
          </div>
        </a> 
      </div> */}
      <section className="mt-2">
        <div className="px-2 pt-4  w-full border-dotted border-gray-500 flex justify-between">
          <div className="ml-2">
            <h1 className="text-[18px] font-[600] capitalize">
              {
                //@ts-ignore
                data?.product?.name || "Lorem Ipsum"
              }{" "}
              ({data?.frameColor?.name || "New"} )
            </h1>
            <h5 className="text-[14px] text-gray-500 font-[500] pb-2">
              Product Id:{" "}
              {
                //@ts-ignore
                data?.sku || "LK001"
              }
            </h5>
            <div className="flex items-center gap-2">
              <span className="text-[#000080] text-[23px] font-[700]">
                ₹
                {
                  //@ts-ignore
                  data?.price || 200
                }
              </span>
            </div>
            {!isContactLens && (
              <div className="flex items-center gap-1 mt-1">
                <InfoIcon size={14} />
                <div className="font-medium text-sm ">
                  Free Lenses worth Rs 2000
                </div>
              </div>
            )}
          </div>
          <div className="h-[20px]  bg-[#FFF2F2] rounded-3xl mt-1 mr-3 flex pl-1 pr-1 items-center">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_264_3512)">
                <path
                  d="M9.16016 4.46801L7.39845 6.00551L7.92618 8.29458C7.95411 8.41424 7.94614 8.53948 7.90327 8.65464C7.8604 8.76981 7.78454 8.86978 7.68517 8.94206C7.58579 9.01434 7.46732 9.05572 7.34455 9.06103C7.22178 9.06634 7.10018 9.03535 6.99493 8.97192L4.99845 7.76098L3.00626 8.97192C2.90101 9.03535 2.7794 9.06634 2.65664 9.06103C2.53387 9.05572 2.4154 9.01434 2.31602 8.94206C2.21665 8.86978 2.14078 8.76981 2.09792 8.65464C2.05505 8.53948 2.04708 8.41424 2.07501 8.29458L2.60196 6.00786L0.839852 4.46801C0.746653 4.38763 0.67926 4.28152 0.646124 4.16299C0.612989 4.04446 0.615587 3.91879 0.653591 3.80173C0.691596 3.68467 0.763316 3.58143 0.859758 3.50497C0.9562 3.42851 1.07307 3.38223 1.19571 3.37192L3.51837 3.17075L4.42501 1.00825C4.47235 0.894777 4.55222 0.797852 4.65453 0.729676C4.75685 0.6615 4.87706 0.625122 5.00001 0.625122C5.12296 0.625122 5.24316 0.6615 5.34548 0.729676C5.4478 0.797852 5.52766 0.894777 5.57501 1.00825L6.48438 3.17075L8.80626 3.37192C8.9289 3.38223 9.04577 3.42851 9.14221 3.50497C9.23865 3.58143 9.31037 3.68467 9.34838 3.80173C9.38638 3.91879 9.38898 4.04446 9.35585 4.16299C9.32271 4.28152 9.25532 4.38763 9.16212 4.46801H9.16016Z"
                  fill="#FFAE00"
                />
              </g>
              <defs>
                <clipPath id="clip0_264_3512">
                  <rect width="10" height="10" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span className="text-[10px] ml-1">4.7+</span>
          </div>
        </div>
      </section>
      <section className="px-4 mt-2">
        <svg
          width="321"
          height="2"
          viewBox="0 0 321 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1H320.5"
            stroke="#CFCDCD"
            stroke-width="0.7"
            stroke-dasharray="2 2"
          />
        </svg>
      </section>
    </section>
  );
};

export default ProductDetail;
