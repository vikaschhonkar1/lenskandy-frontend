import ProductListing from "@/components/categories/Product Listing/ProductListing";
import SearchBox from "@/components/home-page/SearchBox";
import APISERVICES from "@/lib/api-services";
import React from "react";

const Page = async () => {
  const res = await APISERVICES.product.get(`?search=`);
  return (
    <>
      <SearchBox />
      <ProductListing data={res?.data} />
    </>
  );
};

export default Page;
