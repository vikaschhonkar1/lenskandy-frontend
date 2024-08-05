import { Card } from '@/components/ui/card'
import React from 'react'

const BillDetailsCard = ({ itemTotal = 0, discount = 0, coupon }: any) => {

  const couponValue = itemTotal >= coupon?.min_purchase ? coupon?.value : 0
  return (
    <>
      <Card className="py-2 px-3 mt-2 shadow-md">
        <div className="flex justify-between pt-1">
          <h5 className="text-[16px] font-[500]">Item Total</h5>
          <span className="font-[600] text-[16px]"> ₹{itemTotal}</span>
        </div>
        <div className="flex justify-between pt-[4px] ">
          <h5 className="text-[19px] text-[#F2652F] font-[500]">
            Total Offer Discount
          </h5>
          <span className="font-[600] text-[16px] text-[#F2652F]"> ₹0</span>
        </div>
        <div className="flex justify-between  border-b-2 border-dotted border-slate-500 pb-3 pt-[4px]">
          <h5 className="text-[16px] font-[500]">Net Item Total</h5>
          <span className="font-[600] text-[16px]">
            {" "}
            ₹{itemTotal - discount}
          </span>
        </div>
        <hr />
        <div className="flex justify-between pt-1">
          <h5 className="text-[19px] text-[#F2652F] font-[500]">Coupon</h5>
          <span className="font-[500] text-[16px] text-[#F2652F]">{coupon?.code?.toUpperCase()}</span>
        </div>
        <div className="flex justify-between  border-b-2 border-dotted border-slate-500 pb-3 pt-[4px]">
          <h5 className="text-[16px] font-[500]">Coupon Amount</h5>
          <span className="font-[600] text-[16px]"> ₹{couponValue}</span>
        </div>
        <hr />
        <div className="flex justify-between  pt-[4px]">
          <h5 className="text-[16px] font-[500]">Convenience Fees</h5>
          <span className="font-[500] text-[16px] text-[#F2652F]">Free</span>
        </div>
        <div className="flex justify-between pt-[4px]">
          <h5 className="text-[16px] font-[500]">Total Payable</h5>
          <span className="font-[600] text-[16px]"> ₹{itemTotal - discount -couponValue}</span>
        </div>
      </Card>
    </>
  )
}

export default BillDetailsCard