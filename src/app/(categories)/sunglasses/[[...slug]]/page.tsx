import Image from "next/image";
import React from "react";
import CategoryFilters from "@/components/categories/Filter Area/CategoryFilters";
import HeroImage from "@/components/categories/Main Image Area/HeroImage";
import CategoryIntro from "@/components/categories/Category Intro Area/CategoryIntro";
import ProductListing from "@/components/categories/Product Listing/ProductListing";
import AdvertisementImage from "@/components/categories/Advertisement Image Area/AdvertisementImage";
import APISERVICES from "@/lib/api-services";

const Page = async ({ params }: any) => {
  const arr = params?.slug;
  const res = await APISERVICES.product.get(`?cat=sunglasses`);
  let filter = {};

  if (arr && arr.length > 0) {
    filter = {};
    for (let i = 0; i < arr.length - 1; i += 2) {
      //@ts-ignore
      filter[arr[i]] = arr[i + 1]?.split("-");
    }
  }
  const heroImage = "/assets/images/HeroImage/MenSunglasses.png";

  //@ts-ignore
  const gender = filter?.["gender"]?.[0];
  return (
    <>
      <CategoryFilters
        defaultValue={1}
        gender={gender}
        category={"sunglasses"}
      />
      <HeroImage image={heroImage} />
      <CategoryIntro
        categoryName={"Sunglasses"}
        categoryDescription={"Lorem ipsum dolor si"}
      />
      <ProductListing data={res?.data} />
      <AdvertisementImage />
    </>
  );
};

export default Page;
