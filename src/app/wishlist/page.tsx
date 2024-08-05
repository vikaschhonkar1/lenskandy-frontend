import BillDetailsCard from "@/components/add-to-cart/cart/BillDetailsCard";
import CartProductCard from "@/components/add-to-cart/cart/CartProductCard";
import CartTopNav from "@/components/add-to-cart/cart/CartTopNav";
import NoItemsComponent from "@/components/add-to-cart/cart/NoItemsComponent";
import ProceedToCartButton from "@/components/add-to-cart/cart/ProceedToCartButton";
import BenefitsImages from "@/components/generic-components/BenefitsImages";
import RelatedProducts from "@/components/product/RelatedProducts";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import WishlistProductCard from "@/components/wishlist/wishlist-product-card";
import WishlistTopNav from "@/components/wishlist/wishlist-top-nav";
import { accessToken } from "@/hooks/useAuth";
import APISERVICES from "@/lib/api-services";
import { paths } from "@/lib/paths";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";

const Page = async () => {
  const res = await APISERVICES.wishlist.get();
  const cartItems = res?.data;

  return (
    <>
      {cartItems?.length ? (
        <>
          <WishlistTopNav itemsInCart={cartItems?.length} />

          <section className="p-2">
            {cartItems?.length
              ? cartItems?.map((item: any) => (
                  <WishlistProductCard key={item?.id} data={item} />
                ))
              : ""}
          </section>

          <div className="mt-3 pt-4">
            <BenefitsImages />
          </div>

          <section className="px-4 pt-4 pb-1 text-[15px]">
            <>
              <div className="mt-3">
                <h5 className="text-[20px] font-[500] pl-2">
                  Explore More Product
                </h5>
                <p className="pt-2 text-[12px] font-[400] text-gray-500 pl-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda ex perferendis veritatis quas accusamus
                </p>

                <RelatedProducts productId={cartItems?.[0]?.product?.id} />

                <section className="left-0 right-0 bottom-0 fixed w-full p-2"></section>
              </div>
            </>
          </section>
        </>
      ) : (
        <>
          <NoItemsComponent heading={"Wishlist"}/>
        </>
      )}
    </>
  );
};

export default Page;
