"use client";
import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { AddEditAddressDrawer } from "./AddEditAddressDrawer";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import APISERVICES from "@/lib/api-services";
import Script from "next/script";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent } from "../ui/dialog";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { toast } from "sonner";

const CurrentAddressList = ({ addressList }: any) => {
  const [selectedAddress, setSelectedAddress] = useState(
    addressList?.[0]?.id || null
  );
  const router = useRouter();

  //@ts-ignore
  const verifyPayment = async (paymentId, orderId, signature) => {
    try {
      const res = await APISERVICES.verifyPayment.post({
        razorpay_order_id: orderId,
        razorpay_payment_id: paymentId,
        razorpay_signature: signature,
      });
      if (res?.success) {
        const successfulOrderId = res?.data?.orderId;
        router.push(`/order-confirmation/${successfulOrderId}`);
      }
    } catch (error) {
      //@ts-ignore
      toast.error(error?.message);
      router.push("/cart");
    }
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async (data: any) => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    var options = {
      key: "rzp_test_UmD9vSJDnQsrPz", // Enter the Key ID generated from the Dashboard
      name: "LENSKANDY",
      currency: data?.currency || "INR",
      amount: data?.amount,
      order_id: data?.id,
      description: "Thank you for shopping with us",
      image: "/assets/image/HomePageImages/logo.png",
      //@ts-ignore
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        verifyPayment(
          response.razorpay_payment_id,
          response.razorpay_order_id,
          response.razorpay_signature
        );
      },
      prefill: {
        contact: data?.phone,
      },
    };
    //@ts-ignore
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const bookOrder = async () => {
    const res = await APISERVICES.order.post({ addressId: selectedAddress });
    if (res?.success) {
      makePayment(res?.data);
    }
  };
  return (
    <>
      <section className="mx-3 mt-2  pt-3">
        <RadioGroup
          defaultValue={`package_${addressList?.[0]?.id}`}
          className="grid gap-4"
        >
          {addressList &&
            addressList?.map((item: any, index: number) => {
              return (
                <div
                  key={item?.name}
                  onClick={() => {
                    setSelectedAddress(item?.id);
                  }}
                >
                  <RadioGroupItem
                    value={item?.id}
                    id={"package_" + item?.id}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={"package_" + item?.id}
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <div>
                      {item?.name} - +91-{item?.phone}
                    </div>
                    <p>
                      {item?.street}, {item?.state}, {item?.city},{" "}
                      {item?.postalCode}
                    </p>
                  </Label>
                </div>
              );
            })}
        </RadioGroup>
        <AddEditAddressDrawer />
      </section>
      <section className="fixed bottom-0 w-full">
        <Card className="bg-blue-50 h-24 w-full pt-6  px-5 rounded-none">
          {selectedAddress && (
            <Button
              variant="outline"
              className="bg-[#F2652F] text-white w-full  px-8 py-6"
              onClick={() => {
                bookOrder();
              }}
            >
              Pay Now
            </Button>
          )}
        </Card>
      </section>
    </>
  );
};

export default CurrentAddressList;
