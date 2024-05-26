"use client";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React from "react";
import { CategoryFilterTabs } from "./CategoryFilterTabs";
import { paths } from "@/lib/paths";
import { useRouter } from "next/navigation";

// will not be changed in future
// if changed add a new route
const categoryFilterTabData = [
  {
    value: "eyeglasses",
    label: "Eyeglasses",
    path: paths.categories.eyeglasses,
  },
  {
    value: "sunglasses",
    label: "Sunglasses",
    path: paths.categories.sunglasses,
  },
  {
    value: "contact-lenses",
    label: "Contact Lenses",
    path: paths.categories.contactLenses,
  },
  {
    value: "accessories",
    label: "Accessories",
    path: paths.categories.accessories,
  },
  {
    value: "computer-glasses",
    label: "Computer Glasses",
    path: paths.categories.computerGlasses,
  },
  {
    value: "kids-collection",
    label: "Kids Collection",
    path: paths.categories.kidsCollection,
  },
  {
    value: "reading-glasses",
    label: "Reading Glasses",
    path: paths.categories.readingGlasses,
  },
];

const CategoryFilters = (props: any) => {
  const { defaultValue, gender, category } = props;
  const router = useRouter();

  return (
    <section className="flex mt-2">
      <select
        value={gender || ""}
        className="border-2 border-gray-50 h-9 w-[100px] rounded-full outline-none my-3 ml-1 mr-1 p-1 bg-white"
        defaultValue={"women"}
        //@ts-ignore
        onChange={(e, newValue) => {
          router.push("/"+category+"/gender/" + e.target.value)
          // console.log("/"+category+"/gender/" + e.target.value)
          // console.log(e.target.value);
        }}
      >
        <option value="male">Men</option>
        <option value="female">Women</option>
      </select>
      <ScrollArea className="flex">
        <CategoryFilterTabs
          defaultValue={defaultValue}
          tabData={categoryFilterTabData}
        />
        <ScrollBar className="mt-6 hidScrollbar" orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default CategoryFilters;
