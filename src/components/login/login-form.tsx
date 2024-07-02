"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import APISERVICES from "@/lib/api-services";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { FaTerminal } from "react-icons/fa6";

import { createCookies } from "@/lib/cookies";

const formSchema = z.object({
  phone: z.string().refine((value) => /^\d{10}$/.test(value), {
    message:
      "Please enter a 10-digit number without spaces or special characters.",
  }),
});
const formSchemaWithOTP = z.object({
  phone: z.string().refine((value) => /^\d{10}$/.test(value), {
    message:
      "Invalid mobile number. Please enter a 10-digit number without spaces or special characters.",
  }),
  otp: z.string().refine((value) => value.length === 4, {
    message: "OTP must be exactly 4 characters long",
  }),
});

function LoginForm({ onClose }: any) {
  const [isOTPFieldActive, setIsOTPFieldActive] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
  });

  const formWithOTP = useForm<z.infer<typeof formSchemaWithOTP>>({
    resolver: zodResolver(formSchemaWithOTP),
    defaultValues: {
      phone: "",
      otp: "",
    },
  });

  const [message, setMessage] = useState("");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await APISERVICES.login.post(values);

      if (res?.success) {
        setMessage(res?.message);
        formWithOTP.setValue("phone", values.phone);
        setIsOTPFieldActive(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function onSubmitOtp(values: z.infer<typeof formSchema>) {
    try {
      const res = await APISERVICES.loginOtp.post(values);
      if (res?.success) {
        setMessage(res?.message);
        await createCookies("lenskandy_user", JSON?.stringify(res?.data));
        await createCookies("accessToken", res?.data?.accessToken);
        await createCookies("refreshToken", res?.data?.refreshToken);
        setIsOTPFieldActive(true);
        if (onClose) onClose();
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className={`"flex  flex-col items-center `}>
        {isOTPFieldActive ? (
          <Form {...formWithOTP}>
            <form
              onSubmit={formWithOTP.handleSubmit(onSubmitOtp)}
              className="space-y-8"
            >
              <FormField
                control={formWithOTP.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex  text-[16px]">
                      Enter Mobile No.
                    </FormLabel>
                    <span className="text-gray-400 text-[14px] font-[400]">
                      Enter 10 digit mobile number to proceed
                    </span>
                    <div className="relative flex w-full rounded-md shadow-sm h-10">
                      <div className="flex items-center border-r border-gray-300 px-3 rounded-l-md">
                        <Image
                          className="h-6 w-7"
                          src="/assets/image/categoriesImages/flag.jpg"
                          alt="flag"
                          height={30}
                          width={20}
                        />
                        <span className="text-gray-500 text-sm">+91</span>
                      </div>
                      <FormControl>
                        <input
                          disabled
                          placeholder="Enter your Phone No."
                          className="flex-1 block w-full px-3 py-2 rounded-r-md border border-gray-300 focus:outline-none focus:ring-gray-600 focus:ring-1"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formWithOTP.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex  text-[16px]">
                      Enter OTP
                    </FormLabel>
                    <FormControl>
                      <div className="mt-3">
                        <InputOTP {...field} maxLength={6}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                          </InputOTPGroup>
                        </InputOTP>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="mt-4 inline-flex justify-center items-center w-full px-3 py-1 bg-black text-white rounded-md"
              >
                Login
              </Button>
            </form>
            <Alert>
              <AlertDescription>{message || ""}</AlertDescription>
            </Alert>
          </Form>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex justify-center text-[16px]">
                      Enter Mobile No.
                    </FormLabel>
                    <span className="text-gray-400 text-[14px] font-[400]">
                      Enter 10 digit mobile number to proceed
                    </span>
                    <div className="relative flex w-full rounded-md shadow-sm h-10">
                      <div className="flex items-center border-r border-gray-300 px-3 rounded-l-md">
                        <Image
                          className="h-6 w-7"
                          src="/assets/image/categoriesImages/flag.jpg"
                          alt="flag"
                          height={30}
                          width={20}
                        />
                        <span className="text-gray-500 text-sm">+91</span>
                      </div>
                      <FormControl>
                        <input
                          placeholder="Enter your Phone No."
                          className="flex-1 block w-full px-3 py-2 rounded-r-md border border-gray-300 focus:outline-none focus:ring-gray-600 focus:ring-1"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="mt-4 inline-flex justify-center items-center w-full px-3 py-1 bg-black text-white rounded-md"
              >
                Send OTP
              </Button>
            </form>
          </Form>
        )}
      </div>
    </>
  );
}

export { LoginForm };
