import React from "react";
import ProductCard from "./ProductCard";

const ProductListing = () => {
  
  return (
    <section className="grid grid-cols-2 gap-4 p-4">
      {[1, 2, 3, 4, 5, 6]?.map((item: any, index: any) => (
        <ProductCard key={index}/>
      ))}
    </section>
  );
};

export default ProductListing;
