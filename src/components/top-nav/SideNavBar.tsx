import * as React from "react";
import Image from "next/image";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


// import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
// import LoginDialogue from "@/components/auth/loginDialogue";
// import { refreshTokenFn, user } from "@/hooks/useAuth";
import Link from "next/link";
import APISERVICES from "@/lib/api-services";

const ListItem = ({ className, title, children, ...props }:any, ref:any) => {
  return (
    <li
      className={cn(
        "block select-none space-y-1 rounded-md px-3 leading-none no-underline outline-none transition-colors ",
        className
      )}
      {...props}
    >
      <div className="text-sm font-medium leading-none capitalize">{title}</div>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        {children}
      </p>
    </li>
  );
};

export async function AccordionDemo() {
  const res = await APISERVICES.home.get();
  const data = res?.data;

  if (!data) {
    throw new Error(res?.message);
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      {data?.categories?.map((item:any) => {
        const objects = { ...item };
        delete objects.Category;

        return (
          <AccordionItem key={item?.Category?.slug} value="item-1">
            <AccordionTrigger className="capitalize">
              Shop for {item?.Category?.name}
            </AccordionTrigger>
            <AccordionContent className="w-full">
              <ol className="list-disc grid w-[400px] gap-3 p-4 md:w-[300px] md:grid-cols-2 ">
                {Object.entries(objects)?.map(([key, value]:any, index) => {
                  return (
                    <ListItem
                      className={"py-2 w-full"}
                      key={key}
                      title={key}
                      href={"value"}
                    >
                      {/* {component.description} */}
                      <ul className="list-disc	">
                        {value?.map((value: any, index: number) => {
                          return (
                            <li key={value?.slug}>
                              <a
                                href={
                                  "/category/" +
                                  item?.Category?.slug +
                                  "/" +
                                  key +
                                  "/" +
                                  value?.slug
                                }
                              >
                                {value?.name}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </ListItem>
                  );
                })}
              </ol>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export async function SideNav() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <div>
          <Image
            src="/assets/image/homePageImages/humburger.png"
            alt="Logo"
            height={22}
            width={22}
          />
        </div>
      </DrawerTrigger>
      <DrawerContent className="border-none h-full w-[80%] hideTopBar rounded-none rounded-r-sm">
        <div className="mx-auto w-full max-w-sm p-4 ">
          <h1 className="border-b-2">
            <Image
              src="/assets/image/homePageImages/logo.png"
              alt="Logo"
              height={200}
              width={100}
              style={{
                maxWidth: "180px",
                maxHeight: "55px",
              }}
            />
          </h1>
          {/* <LoginDialogue /> */}
          {/* {refreshTokenFn() ? (
            <Link href={"/dashboard"}>
              <div className="h-[100px] w-full flex  px-4 gap-3 items-center">
                <Image
                  className="w-[44px] h-[44px]"
                  src="/assets/image/categoriesImages/sideNav01.png"
                  alt="user"
                  height={48}
                  width={48}
                />
                <div>
                  <h1 className="text-[#000000] font-[700] text-[18px]">
                    Hello {user() ? user()?.name || "" : ""} !
                  </h1>
                  <span className="text-[#000000] font-[700] text-[15px]">
                    +91 {user() ? user()?.phone : ""}
                  </span>
                </div>
              </div>
            </Link>
          ) : (
            <LoginDialogue />
          )} */}
      
            {/* <LoginDialogue /> */}
      
          {AccordionDemo()}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
