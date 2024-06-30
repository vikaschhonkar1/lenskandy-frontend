// pages/return-refund-policy.js
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import React from "react";

const ReturnRefundPolicy = () => {
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
                  Return & Refund Policy
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
            <div className="mb-4">
              The company provides you a 14 days return/refund/exchange policy
              to all its customers provided you meet the following conditions:
            </div>
            <ol className="list-disc list-inside mb-4">
              <li className="mb-2">
                The request for return, refund, or exchange should be made
                within 14 days from the receipt of goods from us by logging into
                their account or by calling customer care no. +91-8130789851 or
                by mailing us at customercare@lenskandy.com.
              </li>
              <li className="mb-2">
                The product should be returned in its original packing along
                with the invoice and other naming tags.
              </li>
              <li className="mb-2">
                After receiving the product back our QC team will verify the
                product that its not been used and is in its original condition,
                in case if the product is found used or damaged or accessories
                missing, the company has the right to deny any type of refund to
                the customer.
              </li>
              <li className="mb-2">
                No return will be accepted if wrong prescription powers are
                entered at the time of order placement.
              </li>
              <li className="mb-2">
                The customer has to make sure that the return package is
                properly sealed and sent to the company registered address, if
                any damage in transit will be the customers responsibility, and
                will cease the applicable policy.
              </li>
              <li className="mb-2">
                Contact lenses will only be refunded if they are in their
                original sealed packing (lenses inside the box should be
                sealed), and all other accessories, documents must be intact.
              </li>
              <li className="mb-2">
                The return, refund, or exchange process will be started only
                after we have received the product in the above-mentioned
                condition.
              </li>
              <li className="mb-2">
                Against the return, the customer could either get a refund in
                cash or in lenskandy wallet (wallet can be used to make another
                purchase from lenskandy website).
              </li>
              <li className="mb-2">
                The refund process takes about 10-15 working days.
              </li>
              <li className="mb-2">
                If any unethical practice is observed from users such as bulk
                ordering and returning the same, lenskandy deserves the right to
                deny the return.
              </li>
              <li className="mb-2">
                For returning the products ordered in the offer or any scheme,
                kindly look into the detailed t&c of that particular offer.
              </li>
            </ol>
            <div></div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ReturnRefundPolicy;
