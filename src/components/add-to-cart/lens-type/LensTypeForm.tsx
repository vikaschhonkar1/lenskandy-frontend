"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import LensPackageDrawerDialog from "../lens-package/LensPackageDrawerDialog";

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

const LensTypeForm = () => {
  
  const [selectedValue, setSelectedValue] = useState('card'); // Initial selected value

  const handleRadioChange = (value: any) => {
    setSelectedValue(value);
  };
  return (
    <section className="px-4">
      <RadioGroup defaultValue={selectedValue} className="grid grid-1 gap-4" onChange={handleRadioChange}>
        {lensTypeData &&
          lensTypeData.map((item, index) => (
            <LensPackageDrawerDialog
              key={index}
              trigger={
                <div key={index} className="space-y-2">
                  <RadioGroupItem value={item.id} 
                    id={item.id} 
                    className="peer sr-only"
                  />
                  <div className="flex">
                    <Image src={item?.image} alt={"Single Visopn"} width={50} height={50} />
                    <Label className={`peer-checked:bg-blue-500 peer-checked:text-white px-3 py-2 rounded-md cursor-pointer`}>
                      {item?.name}
                      <div>
                        <p>{item?.description}</p>
                      </div>
                    </Label>
                    <FaArrowRight />
                  </div>
                </div>
              }
              selectedId={item?.id} 
            />
          ))}
      </RadioGroup>
    </section>
  );
};

export default LensTypeForm;
