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


const CurrentAddressList = ({ addressList }: any) => {
  const [selectedAddress, setSelectedAddress] = useState(
    addressList?.[0]?.id || null
  );
  const [open, setOpen] = useState(false)
  const router = useRouter()
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
      key: "rzp_test_kfwkOyghb8DB4h", // Enter the Key ID generated from the Dashboard
      name: "Manu Arora Pvt Ltd",
      currency: data?.currency || "INR",
      amount: data?.amount,
      order_id: data?.id,
      description: "Thankyou for your test donation",
      image: "https://manuarora.in/logo.png",
      //@ts-ignore
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        console.log(response)
        if(response) {
          setOpen(true)
        }
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Manu Arora",
        email: "manuarorawork@gmail.com",
        contact: "9999999999",
      },
    };
    //@ts-ignore
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const bookOrder = async () => {
    const res = await APISERVICES.order.post({ addressId: selectedAddress });
    console.log(res);
    if(res?.success) {
      makePayment(res?.data)
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
              ₹1999/- Verify & Pay Now
            </Button>
          )}
        </Card>
      </section>
      <Dialog open={open}>
      <DialogContent>
      <div className="flex justify-center pt-52 pb-6">
        <Image
          className="h-[90px] w-[90px]"
          src="/assets/image/categoriesImages/orderConfrm.png"
          alt="lens"
          height={20}
          width={20}
        />
      </div>
      <div className="text-center">
        <h1 className="text-center font-[700] text-[27px]">Order Confirmed.</h1>
        <h2 className="tracking-wider py-2 text-black font-[600]">Thanks for Shopping with us.</h2>
        <p className="text-center py-2 text-gray-400 p-[5px]">
          You will receive an order confirmation email shortly with the expected
          delivery date.
        </p>
      </div>
      <div className="flex justify-center gap-4 text-center items-center">
        <h4 className="text-[#F2652F] text-[26px] border-b-2 border-dotted border-[#F2652F] font-[500]">Go to Your Orders</h4>
        <IoIosArrowForward className="mt-[4px] text-[#F2652F]" />
      </div>
      <section className="fixed bottom-0 w-full">
        <Card className="bg-blue-50 h-24 w-full pt-6 mb-2 px-5 rounded-none">
          {/* <Button3 /> */}
        </Card>
      </section>
    </DialogContent>
      </Dialog>
    </>
  );
};

export default CurrentAddressList;
