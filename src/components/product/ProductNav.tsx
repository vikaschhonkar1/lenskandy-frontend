"use client"
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";

type ProductNavProps = {
  productName: string;
  frameColor: string;
};

const ProductNav = (props: ProductNavProps) => {
  const { productName, frameColor } = props;
  const router = useRouter();
  return (
    <div className="border-0 rounded-none h-[54px] sticky top-0 z-10 bg-white mt-[1px] shadow-lg">
      <div className="container w-full ">
        <header className="flex justify-between items-center">
          <p className="text-[18px] ml-2 flex flex-start mt-3 font-light ">
            <FaArrowLeftLong
              className="mr-6 mt-2"
              onClick={() => router.back()}
            />
            <span className="capitalize">
              {productName} ({frameColor})
            </span>
          </p>
        </header>
      </div>
    </div>
  );
};

export default ProductNav;
