// pages/return-refund-policy.js
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import React from "react";

const CancellationPolicy = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-no-repeat bg-gray-100 min-h-[200px] py-12 lg:py-16 h-[200px]"
        style={{
          backgroundImage: "url('https://lenskandy.com/images/banner-img.svg')",
          // backgroundPositionY: "-100px",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://lenskandy.com/assets/images/career/default.jpg')",
          }}
        ></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center">
                <h2 className="text-white text-2xl lg:text-3xl font-normal mb-2 leading-tight">
                  Cancellation Policy
                </h2>
                <img
                  src="https://lenskandy.com/images/banner-icon.svg"
                  alt="icon"
                  className="inline-block h-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="w-full px-4 mt-8">
        <Card>
          {/* <CardHeader className="text-center mb-6">
            <div className="text-xl font-semibold"></div>
          </CardHeader> */}
          <CardContent>
            <div className="mb-4"></div>
            <ol className="list-disc list-inside mb-4">
              <li className="mb-2">
                Customers can cancel their orders by calling us on customer care
                no +91-8130789851 or by mailing us at customercare@lenskandy.com
                or by logging into their account.
              </li>
              <li className="mb-2">
                Once the products are dispatched from our warehouse cancellation
                would not be allowed.
              </li>
              <li className="mb-2">
                Partial cancellation is not allowed.no refunds will be made in
                case of partial order cancellation.
              </li>
              <li className="mb-2">
                No return will be accepted if wrong prescription powers are
                entered at the time of order placement.
              </li>
              <li className="mb-2">
                For cancellation of the order, ordered in the offer please refer
                to t&c of a particular offer.
              </li>
            </ol>
            <div></div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CancellationPolicy;
