import ApplyCoupon from "@/components/add-to-cart/cart/ApplyCoupon";
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
import { accessToken } from "@/hooks/useAuth";
import APISERVICES from "@/lib/api-services";
import { paths } from "@/lib/paths";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";

const Page = async () => {
  const res = await APISERVICES.cart.get();
  const isLoggedIn = await accessToken();
  const cartItems = res?.data;

  return (
    <>
      {cartItems?.length ? (
        <>
          <CartTopNav itemsInCart={cartItems?.length} />
          <div className='h-[47px] bg-[url("/assets/image/categoriesImages/cartUpperBg.png")] text-center pt-2 text-white font-bold'>
            Offer Here
          </div>

          <section className="p-2">
            {cartItems?.length
              ? cartItems?.map((item: any) => {
                const isContactLens = item?.product?.Category?.slug == "contact-lenses";
             
                
                  return <CartProductCard isContactLens={isContactLens} key={item?.id} data={item} />;
                })
              : ""}
          </section>
          <ApplyCoupon
            coupon={cartItems?.length ? cartItems?.[0]?.cart?.coupon : {}}
          />
          <section className="mx-3">
            <h1 className="mt-3 text-[18px] font-[600]">Bill Details</h1>
            <BillDetailsCard
              itemTotal={
                cartItems?.length
                  ? cartItems?.reduce((accumulator: number, item: any) => {
                      const itemPrice =
                        Number(item?.variant?.price || 0) +
                        Number(item?.lensPackage?.price || 0);
                      return accumulator + itemPrice;
                    }, 0)
                  : 0
              }
              coupon={cartItems?.length ? cartItems?.[0]?.cart?.coupon : {}}
            />
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

          <section className="fixed bottom-0 p-4 w-full z-[999]">
            <ProceedToCartButton isLoggedIn={isLoggedIn} />
          </section>
        </>
      ) : (
        <>
          <NoItemsComponent />
        </>
      )}
    </>
  );
};

export default Page;
