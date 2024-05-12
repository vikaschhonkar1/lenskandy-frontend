"use client";
import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { AddEditAddressDrawer } from "./AddEditAddressDrawer";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import APISERVICES from "@/lib/api-services";
import Script from "next/script";


const PaymentHelper = () => {
  
  
}
const CurrentAddressList = ({ addressList }: any) => {
  const [selectedAddress, setSelectedAddress] = useState(
    addressList?.[0]?.id || null
  );
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

  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    var options = {
      key: "rzp_test_kfwkOyghb8DB4h", // Enter the Key ID generated from the Dashboard
      name: "Manu Arora Pvt Ltd",
      currency: "INR",
      amount: 293400,
      order_id: "order_O9aeBtvGT7CjLO",
      description: "Thankyou for your test donation",
      image: "https://manuarora.in/logo.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        console.log(response)
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

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const bookOrder = async () => {
    const res = await APISERVICES.order.post({ addressId: selectedAddress });
    console.log(res);
    if(res?.success) {
      makePayment()
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
    </>
  );
};

export default CurrentAddressList;
