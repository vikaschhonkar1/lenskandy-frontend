"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Suspense, useCallback, useEffect, useState } from "react";
import { LoginForm, removeLoginParam } from ".";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Close } from "@radix-ui/react-dialog";
import { IoIosCloseCircle } from "react-icons/io";

function Login() {
  const searchParams = useSearchParams();
  const search = searchParams?.get("login");

  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(!!search);
  }, [search]);



  return (
    <>
      <Drawer open={isOpen} onClose={() => removeLoginParam()} >
        <DrawerContent className="z-[9999]">
          <DrawerClose onClick={() => removeLoginParam()} className=" " asChild>
            <IoIosCloseCircle className="absolute -top-0  right-0 h-8 w-8 " />
          </DrawerClose>

          <div className=" h-[360px] mx-auto w-full max-w-sm pb-16 pt-4">
            <LoginForm
              onClose={() => {
                // removeLoginParam();
                if (pathname == "/account") {
                  router?.replace("/");
                } else {
                  removeLoginParam();
                }
              }}
            />
            
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export function LoginDialog() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Login />
    </Suspense>
  );
}
