"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Cross2Icon } from "@radix-ui/react-icons";

import { Suspense, useCallback } from "react";
import { LoginForm, removeLoginParam } from ".";
import * as Dialog from "@radix-ui/react-dialog";

function Login() {
  const searchParams = useSearchParams();
  const search = searchParams?.get("login");

  const router = useRouter();
  const pathname = usePathname();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params?.delete("login");
      router?.replace(pathname + "?" + params.toString());
    },
    [pathname, router, searchParams]
  );

  return (
    <>
      <AlertDialog open={!!search}>
        <AlertDialogContent className="rounded">
          <button
            onClick={removeLoginParam}
            className="IconButton absolute right-0 -top-12  "
            aria-label="Close"
          >
            <Cross2Icon
              color="#000"
              className="bg-white rounded-full h-6 w-6 p-1 "
            />
          </button>
          <AlertDialogHeader>
            <AlertDialogTitle>Login/Signup</AlertDialogTitle>
            <AlertDialogDescription>
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
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
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
