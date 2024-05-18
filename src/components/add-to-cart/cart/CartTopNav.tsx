"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'

type CartTopNavProps = {
    itemsInCart: number;
}

const CartTopNav = (props: CartTopNavProps) => {
    const {itemsInCart} = props
    const router = useRouter()
  return (
    <section>
    <div className=" h-[59px] sticky top-0 z-10 bg-white mt-[1px] shadow-lg">
        <div className="container w-full h-full ">
          <header className="flex justify-between items-center h-full">
            <p
              onClick={() => router?.back()}
              className="text-[18px] ml-2 flex flex-start items-center font-light "
            >
              <FaArrowLeftLong className="mr-3 " />
              <span className="text-[18px] font-[700]">
                Cart ({itemsInCart > 1 ? itemsInCart + " Items" : itemsInCart + " item"})
              </span>
            </p>
            <nav className="md:ml-auto flex items-center mt-3 mr-1 ">
              <a className=" hover:text-gray-900">
                {/* <SideNav /> */}
              </a>
            </nav>
          </header>
        </div>
      </div>
    </section>
  )
}

export default CartTopNav