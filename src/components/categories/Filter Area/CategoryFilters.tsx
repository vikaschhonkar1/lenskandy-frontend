import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React from "react";
import { CategoryFilterTabs } from "./CategoryFilterTabs";

// will not be changed in future
// if changed add a new route 
const categoryFilterTabData = [
  {
    value: "eyeglasses",
    label: "Eyeglasses",
  },
  {
    value: "sunglasses",
    label: "Sunglasses",
  },
  {
    value: "contact-lenses",
    label: "Contact Lenses",
  },
  {
    value: "accessories",
    label: "Accessories",
  },
  {
    value: "computer-glasses",
    label: "Computer Glasses",
  },
  {
    value: "kids-collection",
    label: "Kids Collection",
  },
  {
    value: "reading-glasses",
    label: "Reading Glasses",
  },
];

const CategoryFilters = () => {
  return (
    <section className="flex mt-2">
      <select
        value={"women"}
        className="border-2 border-gray-50 h-9 w-[100px] rounded-full outline-none my-3 ml-1 mr-1 p-1 bg-white"
      >
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="child">Child</option>
      </select>
      <ScrollArea className="flex">
        <CategoryFilterTabs
          tabData={categoryFilterTabData}
        />
        <ScrollBar className="mt-6 hidScrollbar" orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default CategoryFilters;
