"use client";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import APISERVICES from "@/lib/api-services";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const AddressSchema = z.object({
  name: z.string().min(1),
  phone: z.string().refine((value) => /^\d{10}$/.test(value), {
    message:
      "Please enter a 10-digit number without spaces or special characters.",
  }),
  alternatePhone: z
    .string()
    .min(1)
    .optional()
    .refine((value) => !value || /^\d{10}$/.test(value), {
      message:
        "Please enter a 10-digit number without spaces or special characters for the alternate phone number, or leave it empty.",
    }),
  street: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  postalCode: z.string().min(1),
  countryId: z.number(),
  category: z.enum(["HOME", "OFFICE", "OTHER"]),
});

//@ts-ignore
export function AddEditAddressForm({onClose}) {

  const router = useRouter()
  // 1. Define your form.
  const form = useForm<z.infer<typeof AddressSchema>>({
    resolver: zodResolver(AddressSchema),
    defaultValues: {
      name: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      postalCode: "",
      countryId: 1,
      category: "HOME",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof AddressSchema>) {


    const payload = {
      street: values?.street,
      city: values?.city,
      state: values?.state,
      postalCode: values?.postalCode,
      countryId: values?.countryId,
      category: values?.category,
      name: values?.name,
      phone: values?.phone,
    };

    const res = await APISERVICES.address.post(payload);
    // if(res?.success) {
      if(onClose) onClose()
    
    router.refresh()
    // router.push("/checkout/shipping-address");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 overflow-y-auto"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-0">
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Full Name (Required*)" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="space-y-0">
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Phone Number (Required*)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="postalCode"
          render={({ field }) => (
            <FormItem className="space-y-0">
              <FormLabel>Pincode</FormLabel>
              <FormControl>
                <Input placeholder="Pincode (Required*)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-10">
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="State (Required*)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="City (Required*)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem className="space-y-0">
              <FormLabel>Street Address</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="House No. Building name(Required)*"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-[#F2652F]">
          Submit
        </Button>
      </form>
    </Form>
  );
}
