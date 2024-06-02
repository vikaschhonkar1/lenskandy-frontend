import { Benefits } from "@/components/home-page/BenefitsSection";
import CategorySection from "@/components/home-page/CategorySection/CategorySection";
import { CategoryTabs } from "@/components/home-page/CategoryTabs";
import SearchBox from "@/components/home-page/SearchBox";
import { TabStyle2 } from "@/components/home-page/TabStyle2";
import { TopCarousel } from "@/components/home-page/TopCarousel";
import { MidLevelCarousel } from "@/components/home-page/MidLevelCaraousel";
import { LastLevelCarousel } from "@/components/home-page/LastLevelCaraousel";
import { TrendingCollection } from "@/components/home-page/TrendingCollection";
import TrendingProducts from "@/components/home-page/TrendingProducts";
import { Card1 } from "@/components/home-page/cards/Card1";
import ChatWhatsappBtn from "@/components/home-page/chat-whatsapp";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const typesOfGlasses = [
  "EyeGlasses",
  "SunGlasses",
  "Computer Glass",
  "Reading Glasses",
];

export default function Home() {
  const noSearch = false;
  return (
    <>
      <SearchBox />
      <ChatWhatsappBtn />
      <TopCarousel />
      <CategorySection />
      <section className="mt-6">
        <div
          className="container bg-no-repeat bg-[length:51px_89px] pl-5  "
          style={{
            backgroundImage: "url('/assets/image/homePageImages/banner02.png')",
          }}
        >
          <h2 className=" text-[18px] text-black font-semibold">Get up to</h2>
          <h1 className=" text-[47px] text-black font-semibold">60% OFF</h1>
          <div className="flex justify-around">
            {[
              {
                image: "/assets/image/homePageImages/sunglasses.png",
                label: "Sunglasses",
                link: "/sunglasses",
              },
              {
                image: "/assets/image/homePageImages/eyeglasses.png",
                label: "Eyeglasses",
                link: "/eyeglasses",
              },
              {
                image: "/assets/image/homePageImages/zeropower.png",
                label: "Computer Glasses",
                link: "/computer-glasses",
              },
            ].map((item, index) => (
              <Link
                href={item?.link}
                key={index}
                className=" flex flex-col content-center items-center p-2 rounded-lg "
              >
                <Image
                  src={item?.image}
                  alt="avatar"
                  height={98}
                  width={98}
                  className="glasses "
                />
                <span className="text-center">{item?.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-3">
        <Image
          className="w-full pt-3"
          src="/assets/images/HomePage/lenskandy reading glasses banner.png"
          alt="banner"
          height={160}
          width={371}
        />
      </section>

      <section className="mt-3">
        <Card1 />
      </section>
      <section className="mt-2">
        <MidLevelCarousel />
      </section>
      <section className="py-0">
        <div className=" w-full flex flex-wrap gap-y-3	 justify-around pt-7 p-2 pr-2 bg-[#E9E9DD] pb-5">
          {typesOfGlasses?.map((item, index) => {
            return (
              <Card key={index} className="w-[158px] h-[168px] ">
                <div className="flex -space-x-1 overflow-hidden pb-2 pt-[25px]">
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
                <Image
                  className="w-[151px] h-[86px]"
                  src="/assets/image/homePageImages/product01.png"
                  alt="banner"
                  height={135}
                  width={135}
                />
                <div className="h-[32px] bg-[#67A290] rounded-b-xl flex pb-2 mt-[4px] justify-between pl-1 pr-4">
                  <span className="text-[14px] font-[600] text-white pl-[7px] pt-[5px]">
                    {item}
                  </span>
                  <Image
                    className="w-[5px] h-[10px] mt-[11px] ml-4"
                    src="/assets/image/homePageImages/arrow01.png"
                    alt="banner"
                    height={5}
                    width={5}
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </section>
      <section>
        <div className="h-[332px] w-full ">
          <h1 className="pt-[49px] text-[16px] font-semibold pl-4">
            Premium eyewear
          </h1>
          <h1 className="text-[14px] font-semibold text-[#888888] pl-4">
            Set the trend with India’s finest eyewear
          </h1>
          <LastLevelCarousel />
        </div>
      </section>
      <section className="mb-4">
        <TrendingCollection />
      </section>
      <section>
        <div className="  w-full bg-[#E2EAF3] mt-3 pb-3">
          <h1 className="pt-[32px] text-[#010045] pl-[17px] text-[20px] font-extrabold  ">
            New at Lenskandy
          </h1>
          <p className=" text-[#010045] text-[12px] pl-[17px] font-[700] ">
            Fresh collections every 15 days
          </p>
          <TabStyle2 />
        </div>
      </section>
      <section>
        <Benefits />
      </section>
      <section>
        <div
          className="relative bg-[#D9D9D9]
          w-full h-[51px] bottom-0"
        ></div>
      </section>
    </>
  );
}
