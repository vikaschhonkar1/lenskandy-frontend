import OrderCard from "@/components/account/OrderCard";
import APISERVICES from "@/lib/api-services";

import React from "react";

// const data: any= [1,2];
async function Page() {
const {data} = await APISERVICES.order.get()

  return (
    <>
      <div className='h-[47px]  text-center pt-2 font-bold'>
        Your Orders
      </div>
      <section className="p-2 space-y-3">
        {data?.length
          ? data?.map((item: any) => (
              <OrderCard key={item?.id} data={item} />
            ))
          : ""}
      </section>
    </>
  );
}

export default Page;
