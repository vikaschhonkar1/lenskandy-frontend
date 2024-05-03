import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const TrendingProduct = () => {
  return (
    <>
      {" "}
      <section className="container my-2 flex flex-col gap-2 bg-[#ebe2e4] p-4">
        <div className="rounded-md  w-full bg-white pl-2 shadow-[ rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px]">
          <div className="flex h-full w-full ">
            <div className=" w-2/3  ">
              <Badge className="rounded-full px-2 text-[8px] h-[12px] w-[52px] ">
                Trending
              </Badge>
              <Image
                className="px-4 "
                src="/assets/image/homePageImages/trending01.png"
                alt="trendingProduct"
                height="100"
                width="100"
                style={{ height: "58px", width: "150px" }}
              />
              <div className="flex -space-x-1 overflow-hidden pt-1 rounded-md">
                <img
                  className="inline-block h-3 w-3 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-3 w-3 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-3 w-3 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-3 w-3 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span className="h-[8px] w-[14px] text-[10px] inline-block pl-2 font-medium text-[#0000B7]">
                  +8
                </span>
              </div>
            </div>
            <div className="w-full pl-2 h-full rounded-md ">
              <h3 className="text-[10px] font-semibold pt-5 ">
                Lorem ipsum dolor sit amet consectetur
              </h3>
              <p className="text-[7px] font-medium text-gray-400 ">
                size: Extra wide,Lorem ipsum dolor sit amet.
              </p>
              <div className="flex contai">
                <Image
                  style={{ height: "8px", width: "50px", marginTop: "4px" }}
                  src="/assets/image/homePageImages/rating.png"
                  alt="rating"
                  height={100}
                  width={100}
                />
                <span className="h-[8px] w-[14px] text-[10px]  pl-1 font-medium text-black inline-block">
                  4.7+
                </span>
              </div>
              <div className="flex justify-between items-center content-center w-full mt-[-6px]">
                <p className="h-[8px] w-[14px] text-[16px] pl-1 font-medium text-black">
                  ₹1999
                </p>
                <div className="flex mr-3 mt-3">
                  <Badge className="rounded-full  px-2 text-[8px] h-[12px] w-[62px] bg-[#F2652F]">
                    Add to cart
                  </Badge>
                  <Image
                    style={{
                      height: "12px",
                      width: "12px",
                      marginLeft: "12px",
                    }}
                    src="/assets/image/homePageImages/heart.png"
                    alt="rating"
                    height={100}
                    width={100}
                  />
                </div>
              </div>
              <div className="h-4 w-full mt-[18.8px] rounded-b-md bg-gradient-to-r from-white to-[#eace8b]  ">
                <p className="text-[8px] text-[#AB7500] pt-1 ml-[70px]">
                  {" "}
                  Buy 1 Get 1 + Free Membership
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function TrendingProducts() {
  return (
    <>
      {" "}
      <section className="container my- flex flex-col gap-2 bg-[#ebe2e4] p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold pb-3">Now Trendings</h1>
          <a href="#" className="text-xs">
            view all
          </a>
        </div>
        {new Array(3).fill("")?.map((item) => (
          <div key={item} className="shadow-lg mb-3">
            <TrendingProduct />
          </div>
        ))}
      </section>
    </>
  );
}

export default TrendingProducts;
