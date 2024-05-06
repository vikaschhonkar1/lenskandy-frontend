import ShippingAddressNav from '@/components/add-to-cart/shipping-address/ShippingAddressNav'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import React from 'react'

const Page = () => {
  return (
    <>
    <ShippingAddressNav/>
    <section className="mx-3 mt-2  pt-3">
      <RadioGroup defaultValue="card" className="grid grid-1 gap-4">
          <div>
            <RadioGroupItem value="card" id="card" className="peer sr-only" />
            <Label
              htmlFor="card"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <div>
                Name - +91-2345678902
              </div>
              <p>
                Bhuddat Colony, Ballabgarh
              </p>
            </Label>
          </div>
          <div>
            <RadioGroupItem
              value="paypal"
              id="paypal"
              className="peer sr-only"
            />
            <Label
              htmlFor="paypal"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              {/* <Icons.paypal className="mb-3 h-6 w-6" /> */}
              Paypal
            </Label>
          </div>
          <div>
            <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
            <Label
              htmlFor="apple"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              {/* <Icons.apple className="mb-3 h-6 w-6" /> */}
              Apple
            </Label>
          </div>
        </RadioGroup>
        {/* <AddEditAddressDrawer/> */}
      </section>
      <section className="fixed bottom-0 w-full">
        <Card className="bg-blue-50 h-24 w-full pt-6  px-5 rounded-none">
          {/* <Button1 /> */}
        </Card>
      </section>
    </>
  )
}

export default Page