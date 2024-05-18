import BillDetailsCard from "@/components/add-to-cart/cart/BillDetailsCard";
import CartProductCard from "@/components/add-to-cart/cart/CartProductCard";
import CartTopNav from "@/components/add-to-cart/cart/CartTopNav";
import ProceedToCartButton from "@/components/add-to-cart/cart/ProceedToCartButton";
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
      <CartTopNav itemsInCart={2} />
      <div className='h-[47px] bg-[url("/assets/image/categoriesImages/cartUpperBg.png")] text-center pt-2 text-white'>
        Offer Here
      </div>

      <section>
        {cartItems?.length
          ? cartItems?.map((item: any) => (
              <CartProductCard key={item?.id} data={item} />
            ))
          : ""}
        {/* {cartItems?.length
        ? cartItems?.map((item: any) => (
            <CartProductCard key={item?.id} data={item} />
          ))
        : ""} */}
      </section>
      <section className="mx-3">
        <h1 className="mt-3 text-[16px] font-[600]">Coupons & Offers</h1>
        <Card className="mt-2">
          <div className="border-b-2 border-dotted border-slate-500 flex gap-3 p-2">
            <h5 className="text-[16px] font-[500]">Use Coupon </h5>
            <Image
              src="/assets/image/categoriesImages/coupon.png"
              alt="coupon"
              height={20}
              width={20}
            />
          </div>
          <div className="flex justify-between py-3 items-center ml-2 ">
            <Input type="text" className="border-[#9f9e9e]" />
            <div className="flex w-72 justify-evenly">
              <span className="rounded-sm  px-3 py-2 bg-[#F2652F] text-[10px] text-white font-[500] ">
                APPLY
              </span>
              <a className="hover:text-gray-900 border-b-2 self-center border-black text-[10px] font-[700]">
                View Bill
              </a>
            </div>
          </div>
        </Card>
      </section>
      <section className="mx-3">
        <h1 className="mt-3 text-[18px] font-[600]">Bill Details</h1>
        <BillDetailsCard
          itemTotal={
            cartItems?.length
              ? cartItems?.reduce((accumulator: number, item: any) => {
                  const itemPrice =
                    (item?.quantity || 0) * Number(item?.variant?.price || 0);
                  return accumulator + itemPrice;
                }, 0)
              : 0
          }
        />
      </section>
      <section className="mb-16">
        <div className="w-full flex justify-around border-b-2 border-slate-600 border-dotted mt-6 pb-5">
          <div>
            <Image
              className="h-[20px] w-[20px]"
              src="/assets/image/categoriesImages/truck.png"
              alt="truck"
              height={20}
              width={20}
            />
            <h5 className="pt-3 text-[5px] font-[700]">Fast Delivery</h5>
          </div>
          <div className="border-x-2 border-dotted border-slate-500 px-7">
            <Image
              className="h-[20px] w-[20px]"
              src="/assets/image/categoriesImages/delivery.png"
              alt="truck"
              height={20}
              width={20}
            />
            <h5 className="pt-3 text-[5px] font-[700]">Easy Return</h5>
          </div>
          <div>
            <Image
              className="h-[20px] w-[29px] pl-2"
              src="/assets/image/categoriesImages/badge.png"
              alt="truck"
              height={20}
              width={20}
            />
            <h5 className="pt-3 text-[5px] font-[700]">100% Genuine</h5>
          </div>
        </div>
      </section>
      <section className="fixed bottom-0 p-4 w-full">
        <ProceedToCartButton isLoggedIn={isLoggedIn} />
      </section>
    </>
  );
};

export default Page;
