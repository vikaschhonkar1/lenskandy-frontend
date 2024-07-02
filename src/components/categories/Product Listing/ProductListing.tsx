import React from "react";
import ProductCard from "./ProductCard";

type ProductListingProps = {
  data: any;
};
const ProductListing = (props: ProductListingProps) => {

  const { data } = props;

  
  
  return (
    <section className="grid grid-cols-2 gap-4 p-4">
      {data &&
        data?.map((item: any, index: number) => {
          {
            return (
              item?.Variant &&
              item?.Variant?.length > 0 && (
                <ProductCard key={index} index={index} productDetails={item} />
              )
            );
          }
        })}
    </section>
  );
};

export default ProductListing;
