import Image from "next/image";
import { CategoryTabs } from "../CategoryTabs";
import TrendingProducts from "../TrendingProducts";

const CategorySection = ({data}: any) => {
  return (
    <>
      <CategoryTabs data={data}/>
      
    </>
  );
};

export default CategorySection;
