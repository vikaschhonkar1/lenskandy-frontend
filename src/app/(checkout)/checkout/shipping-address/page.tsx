import ShippingAddressNav from "@/components/add-to-cart/shipping-address/ShippingAddressNav";
import { AddEditAddressDrawer } from "@/components/address/AddEditAddressDrawer";
import CurrentAddressList from "@/components/address/CurrentAddressList";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import APISERVICES from "@/lib/api-services";
import React from "react";

const Page = async () => {
  const res = await APISERVICES.address.get();
  return (
    <>
      <ShippingAddressNav />
      <CurrentAddressList addressList={res?.data}/>
    </>
  );
};

export default Page;
