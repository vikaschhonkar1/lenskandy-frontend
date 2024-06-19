import ProductListing from "@/components/categories/Product Listing/ProductListing";
import SearchBox from "@/components/home-page/SearchBox";
import APISERVICES from "@/lib/api-services";
import Image from "next/image";
import React from "react";

const Page = async ({ searchParams }: any) => {
  const search = searchParams.search;
  const res = await APISERVICES.product.get(`?search=${search ? search : ""}`);
  return (
    <>
      <SearchBox search={search} />
      {res?.data?.length > 0 ? (
        <ProductListing data={res?.data} />
      ) : (
        <div className="flex items-center w-full justify-center mt-1 pt-5">
          <Image
            src={"/assets/images/noItem.jpg"}
            width={300}
            height={300}
            alt="No Item"
          />
        </div>
      )}
    </>
  );
};

export default Page;
