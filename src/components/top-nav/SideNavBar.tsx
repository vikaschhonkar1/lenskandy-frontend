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
import { ScrollArea } from "../ui/scroll-area";
import { IoCloseCircle, IoCloseCircleOutline } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Separator } from "../ui/separator";
import { accessToken, logOut, user } from "@/hooks/useAuth";
import LogoutBtn from "../auth/LogoutBtn";
import { LoginDialog } from "../login";
import LogInBtn from "../auth/LoginBtn";

const ListItem = ({ className, title, children, ...props }: any, ref: any) => {
  return (
    <li
      className={cn(
        "block select-none space-y-1 rounded-md px-3 leading-none no-underline outline-none transition-colors ",
        className
      )}
      {...props}
    >
      <div className="text-sm font-medium leading-none capitalize">{title}</div>
      <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
        {children}
      </p>
    </li>
  );
};

const drawerData = [
  {
    id: 1,
    heading: "Shop for Eyeglasses",
    subCategories: [
      {
        id: 1,
        title: "Gender",
        items: [
          {
            id: 1,
            title: "Men",
            href: "/eyeglasses/gender/male",
          },
          {
            id: 2,
            title: "Women",
            href: "/eyeglasses/gender/female",
          },
          {
            id: 3,
            title: "Kids",
            href: "/eyeglasses/gender/kids",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    heading: "Shop for Sunglasses",
    subCategories: [
      {
        id: 1,
        title: "Gender",
        items: [
          {
            id: 1,
            title: "Men",
            href: "/sunglasses/gender/male",
          },
          {
            id: 2,
            title: "Women",
            href: "/sunglasses/gender/female",
          },
          {
            id: 3,
            title: "Kids",
            href: "/sunglasses/gender/kids",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    heading: "Shop for Computer Glasses",
    subCategories: [
      {
        id: 1,
        title: "Gender",
        items: [
          {
            id: 1,
            title: "Men",
            href: "/computer-glasses/gender/male",
          },
          {
            id: 2,
            title: "Women",
            href: "/computer-glasses/gender/female",
          },
          {
            id: 3,
            title: "Kids",
            href: "/computer-glasses/gender/kids",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    heading: "Shop for Reading Glasses",
    subCategories: [
      {
        id: 1,
        title: "Gender",
        items: [
          {
            id: 1,
            title: "Men",
            href: "/reading-glasses/gender/male",
          },
          {
            id: 2,
            title: "Women",
            href: "/reading-glasses/gender/female",
          },
          {
            id: 3,
            title: "Kids",
            href: "/reading-glasses/gender/kids",
          },
        ],
      },
    ],
  },
];

export async function AccordionDemo() {
  return (
    <>
      <Accordion type="single" collapsible className="">
        {drawerData?.map((item, index) => {
          return (
            <AccordionItem value={`${item.id}`} key={index}>
              <AccordionTrigger>
                <div className="flex items-center justify-between">
                  <div className=" font-medium leading-none capitalize">
                    {item?.heading}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ol className="list-disc grid  gap-3 p-4 md:w-[300px] md:grid-cols-2 ">
                  {item?.subCategories?.map((item, index) => {
                    return (
                      <ListItem
                        className={"py-2 w-full"}
                        key={index}
                        title={item?.title}
                      >
                        <ul className="list-disc  ">
                          {item?.items?.map((item, index) => {
                            return (
                              <li key={index}>
                                <a href={item?.href}>{item?.title}</a>
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
    </>
  );
}

export async function SideNav() {
  const isLoggedIn = await accessToken();
  const userDetails = await user();
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <svg
          width="17"
          height="13"
          viewBox="0 0 17 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.902161 4.5C0.902161 4.36739 0.954982 4.24021 1.04901 4.14645C1.14303 4.05268 1.27055 4 1.40352 4H12.7422C12.8752 4 13.0027 4.05268 13.0968 4.14645C13.1908 4.24021 13.2436 4.36739 13.2436 4.5C13.2436 4.63261 13.1908 4.75979 13.0968 4.85355C13.0027 4.94732 12.8752 5 12.7422 5H1.40352C1.27055 5 1.14303 4.94732 1.04901 4.85355C0.954982 4.75979 0.902161 4.63261 0.902161 4.5ZM0.902161 0.5C0.902161 0.367392 0.954982 0.240215 1.04901 0.146447C1.14303 0.0526785 1.27055 0 1.40352 0H16.4443C16.5772 0 16.7048 0.0526785 16.7988 0.146447C16.8928 0.240215 16.9456 0.367392 16.9456 0.5C16.9456 0.632608 16.8928 0.759785 16.7988 0.853553C16.7048 0.947321 16.5772 1 16.4443 1H1.40352C1.27055 1 1.14303 0.947321 1.04901 0.853553C0.954982 0.759785 0.902161 0.632608 0.902161 0.5ZM0.902161 8.5C0.902161 8.36739 0.954982 8.24021 1.04901 8.14645C1.14303 8.05268 1.27055 8 1.40352 8H16.4443C16.5772 8 16.7048 8.05268 16.7988 8.14645C16.8928 8.24021 16.9456 8.36739 16.9456 8.5C16.9456 8.63261 16.8928 8.75979 16.7988 8.85355C16.7048 8.94732 16.5772 9 16.4443 9H1.40352C1.27055 9 1.14303 8.94732 1.04901 8.85355C0.954982 8.75979 0.902161 8.63261 0.902161 8.5ZM0.902161 12.5C0.902161 12.3674 0.954982 12.2402 1.04901 12.1464C1.14303 12.0527 1.27055 12 1.40352 12H12.7422C12.8752 12 13.0027 12.0527 13.0968 12.1464C13.1908 12.2402 13.2436 12.3674 13.2436 12.5C13.2436 12.6326 13.1908 12.7598 13.0968 12.8536C13.0027 12.9473 12.8752 13 12.7422 13H1.40352C1.27055 13 1.14303 12.9473 1.04901 12.8536C0.954982 12.7598 0.902161 12.6326 0.902161 12.5Z"
            fill="#010045"
          />
        </svg>
      </DrawerTrigger>
      <DrawerContent className="border-none h-full w-9/12 hideTopBar rounded-none rounded-r-sm">
        <div className="flex items-center justify-between px-2 pr-5 py-6">
          <Link href="/">
            <DrawerClose>
              <Image
                src={"/assets/images/logo.svg"}
                alt="Logo"
                height={80}
                width={124}
              />
            </DrawerClose>
          </Link>
          <div>
            <DrawerClose>
              <IoMdCloseCircleOutline size={20} />
            </DrawerClose>
          </div>
        </div>
        <Separator color="#000" />
        {userDetails ? (
          <Link href={"/account"}>
            <DrawerClose className="w-full">
              <div className="h-[100px] w-full bg-cover bg-center bg-[url('/assets/image/categoriesImages/dashboard01.png')] flex justify-center gap-3 py-4">
                <Image
                  className="w-12 h-12 mt-1"
                  src="/assets/image/categoriesImages/dashboard7.png"
                  alt="user"
                  height={32}
                  width={32}
                />
                <div>
                  <h1 className="text-white font-[700] text-lg">
                    Hello {userDetails?.name}!
                  </h1>
                  <span className="text-white font-[700] text-lg">
                    +91 {userDetails?.phone}
                  </span>
                </div>
              </div>
            </DrawerClose>
          </Link>
        ) : (
          ""
        )}
        <ScrollArea>
          <div className="mx-auto w-full max-w-sm p-4 ">{AccordionDemo()}</div>
        </ScrollArea>

     {isLoggedIn ? <LogoutBtn />:<LogInBtn />}
      </DrawerContent>
    </Drawer>
  );
}
