import Image from "next/image";
import React from "react";
import CategoryFilters from "@/components/categories/Filter Area/CategoryFilters";
import HeroImage from "@/components/categories/Main Image Area/HeroImage";
import CategoryIntro from "@/components/categories/Category Intro Area/CategoryIntro";
import ProductListing from "@/components/categories/Product Listing/ProductListing";
import AdvertisementImage from "@/components/categories/Advertisement Image Area/AdvertisementImage";
import APISERVICES from "@/lib/api-services";
import Filter from "@/components/filters/Filter";
import _ from "lodash"
const Page = async({ params }: any) => {
  const arr = params?.slug;
  const filter: any = {};
  const allFilters = await APISERVICES.getAllFilters.get();

  const filterData = allFilters?.data || [];

  const slugs = params.slug || [];

  let filterQuery = "";
  let filterQueryArray = [];

  if (slugs?.length > 0 && filterData?.length > 0) {
    for (let i = 0; i < slugs.length - 1; i += 2) {
      const value = filterData?.find(
        (item: any) => item.slug === slugs[i]
      )?.value;
      filterQueryArray.push(value + "=" + slugs[i + 1]);
      const slugItems = slugs[i + 1]?.split("_");

      if (!_.isObject(filter[slugs[i]])) {
        filter[slugs[i]] = {};
      }
      //@ts-ignore
      slugItems.forEach((slug) => {
        filter[slugs[i]][slug] = true;
      });
    }
  }

  filterQuery = filterQueryArray.join("&");


  const res = await APISERVICES.product.get(`?cat=reading-glasses&${filterQuery}`) 

  const heroImage = "/assets/images/HeroImage/MenReadingGlasses.png";
  return (
    <>
      <CategoryFilters  defaultValue={6}/>
      <HeroImage image={heroImage}/>
      <CategoryIntro categoryName={"Reading Glasses"} categoryDescription={"Lorem ipsum dolor si"} />
      <ProductListing data={res?.data}/>
      <AdvertisementImage/>
      
      <Filter allFilters={allFilters?.data} selectedFilter={filter} type={"reading-glasses"} />
    </>
  );
};

export default Page;
