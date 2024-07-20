"use client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import APISERVICES from "@/lib/api-services";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner"; //@ts-ignore
import confetti from "canvas-confetti";
// confettiAnimation.js
export function startConfettiAnimation() {
    let duration = 2 * 1000;
    let animationEnd = Date.now() + duration;
    let defaults = { startVelocity: 25, spread: 360, ticks: 60, zIndex: 0 };
  //@ts-ignore
    function randomInRange(min, max) {//@ts-ignore
      return Math.random() * (max - min) + min;
    }
  //@ts-ignore
    let interval = setInterval(function() {
      let timeLeft = animationEnd - Date.now();
  
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
  
      let particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
  }

  
const ApplyCoupon = ({ coupon }: any) => {
  const [couponCode, setCouponCode] = useState(coupon?.code?.toUpperCase());
  const [error, setError] = useState(null);
  const router = useRouter();
  const applyCoupon = async () => {
    const res = await APISERVICES.coupon.put("", { couponCode: couponCode });
    if (res?.success) {
      toast.success(res?.message);
      startConfettiAnimation();
    } else {
      toast.error(res?.message);
      setCouponCode("");
    }
    router.refresh();
  };

  const removeCoupon = async () => {
    const res = await APISERVICES.coupon.put("", { couponCode: 0 });
    if (res?.success) {
      toast.success(res?.message);
    } else {
      toast.error(res?.message);
      setCouponCode("");
    }
    router.refresh();
  }

  

  return (
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
          <Input
            type="text"
            className="border-[#9f9e9e] mr-3"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value?.toUpperCase())}
          />
          <button onClick={applyCoupon} className="flex justify-evenly gap-2">
            <span className="rounded-sm mr-2 px-3 py-3 bg-[#F2652F] text-[10px] text-white font-[500] ">
              APPLY
            </span>
          </button>
        </div>
        <>{error}</>
      </Card>
    </section>
  );
};

export default ApplyCoupon;
