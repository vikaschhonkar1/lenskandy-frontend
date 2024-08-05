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
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const Filter = (props: any) => {
  const { allFilters, selectedFilter, type } = props;
  const router = useRouter();
  const [selectedItems, setSelectedItems] = useState(selectedFilter);

  const handleCheckboxChange = (filterSlug: any, itemSlug: any) => {
    setSelectedItems((prevState: any) => ({
      ...prevState,
      [filterSlug]: {
        ...prevState[filterSlug],
        [itemSlug]: !prevState[filterSlug]?.[itemSlug],
      },
    }));
  };
  // @ts-ignore
  const filterRouteBuilder = (selectedItems) => {
    const parentFilter = Object.keys(selectedItems);

    // @ts-ignore
    const route = parentFilter.reduce((prevValue, currValue, idx) => {
      const subFilter = Object.keys(selectedItems[currValue]);

      const subFilterRoute = subFilter.reduce((prev, curr, idx) => {
        if (selectedItems[currValue][curr] == false) {
          return prev;
        }

        return prev === "" ? curr : prev + "_" + curr;
      }, "");

      // If all the values are false
      if (subFilterRoute === "") return prevValue;

      return prevValue + "/" + currValue + "/" + subFilterRoute;
    }, type);
    return route;
  };

  const applyFilter = () => {
    const route = filterRouteBuilder(selectedItems);
   
    router.replace("/" + route);
  };

  return (
    <>
      <section className="sticky bottom-0 w-full  mt-1 p-2  flex justify-around gap-2">
        <Drawer>
          <DrawerTrigger className="w-full items-center flex justify-center ">
            <div className="w-full flex bg-white shadow m-1 p-2 rounded justify-center font-bold gap-2 items-center">
              <FilterIcon size={20} />
              Filter
            </div>
          </DrawerTrigger>
          <DrawerContent className="h-10/12">
            <DrawerTitle className="w-full flex justify-between p-2 font-medium pl-5 shadow-sm">
              Filters
              <Button
                onClick={() => {
                  router?.replace("/" + type);
                }}
                variant={"ghost"}
              >
                Clear Filters
              </Button>
            </DrawerTitle>
            <ScrollArea>
              <Accordion
                type="single"
                collapsible
                className="px-3 h-[70vh] max-h-[70vh]"
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
                                  checked={
                                    //@ts-ignore
                                    selectedItems[filter.slug]?.[item.slug] ||
                                    false
                                  }
                                  onCheckedChange={(e) => {
                             
                                    handleCheckboxChange(
                                      filter.slug,
                                      item.slug
                                    );
                                  }}
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
              <Button className="w-full" onClick={applyFilter}>
                Submit
              </Button>
            </DrawerFooter>
          </DrawerContent>{" "}
        </Drawer>
      </section>
    </>
  );
};

export default Filter;
