"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import APISERVICES from "@/lib/api-services";
import { paths } from "@/lib/paths";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { accessToken, user } from "@/hooks/useAuth";
// import { cookies } from "next/headers";
import { allCookies } from "@/lib/auth/AuthClient";
import { AddToCart } from "@/actions/cart";
import { addLoginParam } from "@/components/login";

const lensPackageData: any = [
  {
    id: 1,
    lensTypeId: 1,
    name: "Anti-Glare Premium",
    tags: [
      {
        id: 1,
        icon: "",
        tagName: "Scratch Resistent",
      },
    ],
    image: "",
    combo: "Frame + Lens",
    price: "1500",
    features: [
      {
        id: 1,
        icon: "",
        feature: "Double side anti-glare",
      },
      {
        id: 2,
        icon: "",
        feature: "Scratch Resistent",
      },
      {
        id: 3,
        icon: "",
        feature: "6 months warranty",
      },
    ],
  },
  {
    id: 3,
    lensTypeId: 1,
    name: "Grey Tinted Power Lenses",
    tags: [],
    image: "",
    combo: "Frame + Lens",
    price: "1500",
    features: [
      {
        id: 1,
        icon: "",
        feature: "UV-400 protection",
      },
      {
        id: 2,
        icon: "",
        feature: "Crack & scratch resistant",
      },
      {
        id: 3,
        icon: "",
        feature: "Lightweight lenses",
      },
      {
        id: 3,
        icon: "",
        feature: "Non-polarized lenses",
      },
      {
        id: 3,
        icon: "",
        feature: "Applicable only for single vision power",
      },
      {
        id: 3,
        icon: "",
        feature: "1 year warranty",
      },
    ],
  },
  {
    id: 2,
    lensTypeId: 1,
    name: "BLU Essential",
    image: "",
    tags: [
      {
        id: 2,
        icon: "",
        tagName: "Bestseller",
      },
      {
        id: 3,
        icon: "",
        tagName: "Screen Protection",
      },
    ],
    combo: "Frame + Lens",
    price: "1500",
    features: [
      {
        id: 4,
        icon: "",
        feature: "Blue Light Block",
      },
      {
        id: 5,
        icon: "",
        feature: "Double Side anti-glare",
      },
      {
        id: 6,
        icon: "",
        feature: "Cract, smudge, & scratch resistant",
      },
      {
        id: 7,
        icon: "",
        feature: "1 year warranty",
      },
    ],
  },
  {
    id: 4,
    lensTypeId: 1,
    name: "Grey Tinted Power Lenses",
    tags: [],
    image: "",
    combo: "Frame + Lens",
    price: "1500",
    features: [
      {
        id: 1,
        icon: "",
        feature: "UV-400 protection",
      },
      {
        id: 2,
        icon: "",
        feature: "Crack & scratch resistant",
      },
      {
        id: 3,
        icon: "",
        feature: "Lightweight lenses",
      },
      {
        id: 3,
        icon: "",
        feature: "Non-polarized lenses",
      },
      {
        id: 3,
        icon: "",
        feature: "Applicable only for single vision power",
      },
      {
        id: 3,
        icon: "",
        feature: "1 year warranty",
      },
    ],
  },
  {
    id: 5,
    lensTypeId: 1,
    name: "BLU Essential",
    image: "",
    tags: [
      {
        id: 2,
        icon: "",
        tagName: "Bestseller",
      },
      {
        id: 3,
        icon: "",
        tagName: "Screen Protection",
      },
    ],
    combo: "Frame + Lens",
    price: "1500",
    features: [
      {
        id: 4,
        icon: "",
        feature: "Blue Light Block",
      },
      {
        id: 5,
        icon: "",
        feature: "Double Side anti-glare",
      },
      {
        id: 6,
        icon: "",
        feature: "Cract, smudge, & scratch resistant",
      },
      {
        id: 7,
        icon: "",
        feature: "1 year warranty",
      },
    ],
  },
];
const LensPackageForm = ({ id, productDetails, isLoggedIn }: any) => {
  const [lensPackageData, setLensPackageData] = useState(null);
  const [selectedLensPackageId, setLensPackageId] = useState("");
  const fetchLensPackage = async () => {
    const res = await APISERVICES.lensPackage.get(`?lensPower=${id}`);
    // console.log(res);
    setLensPackageData(res?.data);
  };
  // console.log(isLoggedIn);
  useEffect(() => {
    fetchLensPackage();
  }, [id]);
  const router = useRouter();
  // console.log(id)
  return (
    <section className="px-4 mt-2 ">
      <section className=" pt-3">
        <RadioGroup
          defaultValue={
            //@ts-ignore
            `package_${lensPackageData?.[0]?.id}`
          }
          className="grid gap-4"
        >
          {lensPackageData && //@ts-ignore
            lensPackageData?.map((item: any, index: number) => {
              return (
                <div
                  key={item?.name}
                  onClick={() => {
                    console.log(item?.id);
                    setLensPackageId(item?.id);
                  }}
                >
                  
                  <Label
                    htmlFor={"package_" + item?.id}
                    className="flex flex-col  justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <div className="flex justify-between w-full">
                      <div className="mb-2 font-bold">{item?.name}</div>
                      <RadioGroupItem
                        value={item?.id}
                        id={"package_" + item?.id}
                        className=""
                      />
                    </div>
                    
                    <div className="mb-2 flex gap-2">
                      {item?.tags &&
                        JSON.parse(item?.tags)?.map(
                          (val: any, newIndex: number) => (
                            <Badge key={newIndex} variant={"outline"}>
                              {val?.tag}
                            </Badge>
                          )
                        )}
                    </div>

                    <Separator />
                    <div className="flex flex-col gap-2 my-4">
                      {item?.features &&
                        JSON.parse(item?.features).map(
                          (val: any, index: number) => {
                            return (
                              <div key={index} className="flex gap-2 items-center">
                                <div>
                                  <Image
                                    src={
                                      "/assets/image/AddToCart/SingleVision.webp"
                                    }
                                    alt={"Image"}
                                    height={10}
                                    width={10}
                                  />
                                </div>
                                <div className="capitalize text-gray-800">{val?.feature}</div>
                              </div>
                            );
                          }
                        )}
                    </div>
                    <span>{item?.combo}</span>
                    <Separator />
                    <span className="mt-3">Price: ₹ {item?.price}</span>
                  </Label>
                </div>
              );
            })}
        </RadioGroup>
      </section>
      <section className=" w-full fixed  px-4 left-0 bottom-2 ">
        <Button
          variant="outline"
          className="bg-[#F2652F] text-white h-[40px] w-full text-[18px] "
          disabled={selectedLensPackageId ? false : true}
          onClick={() => {
            // router.push(paths.checkout.cart);
            if (isLoggedIn) {
              AddToCart(
                parseInt(productDetails?.productId),
                parseInt(productDetails?.id),
                Number(selectedLensPackageId)
              );
            } else {
              AddToCart(
                parseInt(productDetails?.productId),
                parseInt(productDetails?.id),
                Number(selectedLensPackageId)
              );
            }
            // console.log(id)
          }}
        >
          Proceed To Cart
        </Button>
      </section>
    </section>
  );
};

export default LensPackageForm;
