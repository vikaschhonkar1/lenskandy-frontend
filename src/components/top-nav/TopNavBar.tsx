import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { SideNav } from "@/components/top-nav/SideNavBar";
// import CartPopover from "@/components/cart/cartPopover";

const TopNav = () => {
  return (
    <>
      <div className="border-0 rounded-none h-[55px] sticky top-0 z-10 bg-white ">
        <div className="container w-full ">
          <header className="flex justify-between items-center ">
            <Image
              src="/assets/image/homePageImages/logo.png"
              alt="Logo"
              height={30}
              width={64}
              style={{
                maxWidth: "180px",
                maxHeight: "55px",
              }}
            />
            <nav className="md:ml-auto flex bg  gap-6 items-center ">
              <a className=" hover:text-gray-900 text-center">
                <Image
                  src="/assets/image/homePageImages/support.png"
                  alt="Logo"
                  height={18}
                  width={18}
                />
              </a>
              <a href="/dashboard/wishlist" className=" hover:text-gray-900">
                <Image
                  src="/assets/image/homePageImages/wishlist.png"
                  alt="Logo"
                  height={20}
                  width={20}
                />
              </a>
              <a className=" hover:text-gray-900">{/* <CartPopover /> */}</a>
              <a className=" hover:text-gray-900">
                <SideNav />
              </a>
            </nav>
          </header>
        </div>
      </div>
    </>
  );
};

export default TopNav;
