"use client";
import { FilterIcon, SortAscIcon } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import FilterAccordion from "./FilterAccordion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Checkbox } from "../ui/checkbox";
import { ScrollArea } from "../ui/scroll-area";
import { useState } from "react";

const Filter = (props: any) => {
  const { allFilters } = props;

  const [selectedItems, setSelectedItems] = useState({});

  const handleCheckboxChange = (filterId: any, itemId: any) => {
    setSelectedItems((prevState: any) => ({
      ...prevState,
      [filterId]: {
        ...prevState[filterId],
        [itemId]: !prevState[filterId]?.[itemId],
      },
    }));
  };

  return (
    <>
      <section className="sticky bottom-0 w-full  mt-1 p-2 bg-gray-200 flex justify-around gap-2">
        <Drawer>
          <DrawerTrigger className="w-full items-center flex justify-center ">
            <div className="w-full flex bg-white m-1 p-2 rounded justify-center font-bold gap-2 items-center">
              <FilterIcon size={20} />
              Filter
            </div>
          </DrawerTrigger>
          <DrawerContent className="h-10/12">
            <DrawerTitle className="w-full flex justify-between p-2 font-medium pl-5">
              Filters
              <Button variant={"ghost"}>Clear Filters</Button>
            </DrawerTitle>
            <ScrollArea>
              <Accordion
                type="single"
                collapsible
                className="px-3 max-h-[70vh]"
              >
                {allFilters?.length > 0 ? (
                  allFilters?.map((filter: any, index: any) => (
                    <AccordionItem value={`item-${filter.id}`} key={index}>
                      <AccordionTrigger>{filter.name}</AccordionTrigger>
                      <ScrollArea>
                        <AccordionContent>
                          <div className="m-1 p-2">
                            {filter.items.map((item: any, itemIndex: any) => (
                              <div
                                key={itemIndex}
                                className="flex flex-row justify-between  leading-none items-center m-2"
                              >
                                <label
                                  htmlFor={`terms-${filter.id}-${item.id}`}
                                  className="text leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {item.name}
                                </label>
                                <Checkbox
                                  id={`terms-${filter.id}-${item.id}`}
                                  //@ts-ignore
                                  // checked={
                                  //   //@ts-ignore
                                  //   selectedItems[filter.id]?.[item.id] || false
                                  // }
                                  onChange={() =>
                                    handleCheckboxChange(filter.id, item.id)
                                  }
                                />
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </ScrollArea>
                    </AccordionItem>
                  ))
                ) : (
                  <>No Filters For the selected Category</>
                )}
              </Accordion>
            </ScrollArea>
            <DrawerFooter className="flex flex-row gap-2">
              <DrawerClose className="w-full">
                <Button variant={"outline"} className="w-full">
                  Cancel
                </Button>
              </DrawerClose>
              <Button className="w-full">Submit</Button>
            </DrawerFooter>
          </DrawerContent>{" "}
        </Drawer>
      </section>
    </>
  );
};

export default Filter;
