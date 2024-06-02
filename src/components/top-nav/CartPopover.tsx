import APISERVICES from "@/lib/api-services";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Link from "next/link";
import Image from "next/image";
import { config } from "@/config";
import { PopoverClose } from "@radix-ui/react-popover";
import { IoClose } from "react-icons/io5";

const CartPopover = async () => {
  const res = await APISERVICES.cart.get();
  const cartItems = res?.data;
  return (
    <>
        <Link href={"/cart"}> <div className="relative inline-block">
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.48391 13.9129C2.5622 15.2078 4.56781 15.2078 8.58082 15.2078H9.22779C13.2408 15.2078 15.2473 15.2078 16.3256 13.9129M1.48391 13.9129C0.40563 12.6171 0.775841 10.6509 1.51536 6.71691C2.04103 3.92097 2.30341 2.5221 3.30172 1.69587M16.3256 13.9129C17.4039 12.6171 17.0337 10.6509 16.2941 6.71691C15.7685 3.92097 15.5052 2.5221 14.5069 1.69587M14.5069 1.69587C13.5095 0.869629 12.0816 0.869629 9.22869 0.869629H8.57992C5.72696 0.869629 4.30003 0.869629 3.30172 1.69587"
                stroke="#000042"
                stroke-width="1.5"
              />
              <path
                d="M6.36139 4.4541C6.54704 4.97882 6.89131 5.43319 7.34676 5.75458C7.80221 6.07598 8.34641 6.24857 8.90434 6.24857C9.46228 6.24857 10.0065 6.07598 10.4619 5.75458C10.9174 5.43319 11.2616 4.97882 11.4473 4.4541"
                stroke="#000042"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            {cartItems?.length > 0 ? (
              <span className="absolute -top-[7px] -right-[5px]  bg-red-500 text-white font-bold rounded-full h-3 w-3 text-center text-[8px] ">
                {cartItems?.length}
              </span>
            ) : (
              ""
            )}
          </div></Link>
        
    </>
  );
};

export default CartPopover;
