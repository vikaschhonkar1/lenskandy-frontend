"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import LensPackageDrawerDialog from "../lens-package/LensPackageDrawerDialog";
import APISERVICES from "@/lib/api-services";

const lensTypeData = [
  {
    id: 1,
    name: "With Power",
    description: "Positive, Negative or Cylindrical",
    image: "/assets/image/AddToCart/SingleVision.webp",
    directAddToCart: false,
  },
  {
    id: 2,
    name: "Zero Power",
    description: "BLue Light Block for screen protection",
    image: "/assets/image/AddToCart/ZeroPowerComputer.webp",
    directAddToCart: false,
  },
  {
    id: 3,
    name: "Progressive/Bifocals",
    description: "Positive, Negative or Cylindrical",
    image: "/assets/image/AddToCart/ProgressiveBifocal.webp",
    directAddToCart: false,
  },
  {
    id: 4,
    name: "Tinted with Power",
    description: "Positive, Negative or Cylindrical",
    image: "/assets/image/AddToCart/SunSingleVision.webp",
    directAddToCart: false,
  },
  {
    id: 5,
    name: "Frame Only",
    description: "Positive, Negative or Cylindrical",
    image: "/assets/image/AddToCart/FrameOnly.webp",
    directAddToCart: true,
  },
];

const LensTypeForm =  (props: any) => {
  const {categoryId, productDetails} = props
  const [lensTypeData1, setLensTypeData] = useState(null)
  const [selectedId, setSelectedId] = useState("")
  const fetchLensType = async () => {
    const res = await APISERVICES.lensType.get(`?categoryId=${categoryId}`)
    if(res?.success) setLensTypeData(res?.data)
  }
// console.log(productDetails)

  useEffect(()=> {
    fetchLensType();
  }, [categoryId])
  return (
    <section className="px-4">
      <RadioGroup className="grid grid-1 gap-4">
        {lensTypeData1 &&
          lensTypeData1?.map((item, index) => (
            <LensPackageDrawerDialog
              key={index}
              trigger={
                <div key={index} className="space-y-2 w-12/12" onClick={()=> setSelectedId(item?.id)}>
                  <RadioGroupItem
                  //@ts-ignore
                    value={item.id}
                    //@ts-ignore
                    id={item.id}
                    className="peer sr-only"
                  />
                  <div className="flex">
                    {/* <Image
                      src={item?.image}
                      alt={"Single Visopn"}
                      width={50}
                      height={50}
                    /> */}
                    <Label
                      className={`peer-checked:bg-blue-500 peer-checked:text-white px-3 py-2 rounded-md cursor-pointer`}
                    >
                      {item?.name}
                      <div>
                        <p>{item?.description}</p>
                      </div>
                    </Label>
                    <FaArrowRight />
                  </div>
                </div>
              }
              selectedId={selectedId}
              productDetails={productDetails}
            />
          ))}
      </RadioGroup>
    </section>
  );
};

export default LensTypeForm;
