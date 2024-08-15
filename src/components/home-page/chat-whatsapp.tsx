import React from "react";
import { Button } from "../ui/button";
import { MobileIcon, ChatBubbleIcon, Half1Icon } from "@radix-ui/react-icons";
import Link from "next/link";

function ChatWhatsappBtn() {
  return (
    <section className="grid grid-cols-2 py-2 justify-around container gap-2 rounded-lg px-3">
      <Link href={"tel:+91-7703911937"} className="w-full h-full">
        <Button
          variant={"outline"}
          style={{
            boxShadow:
              "0px 1px 2px 0px rgba(0, 0, 0, 0.15) inset, 0px 2px 3px 0px rgba(0, 0, 0, 0.15)",
          }}
          className=" w-full py-6 h-[45px] border border-solid border-white"
        >
          <MobileIcon className="mr-2" /> Buy on Call
        </Button>
      </Link>
      <Link href={"https://wa.me/917703911937?text=text=Hii%20Lenskandy%2C%20I%20like%20to%20buy%20eyeglasses%2Fsunglasses"} className="w-full h-full">
      <Button
        variant={"outline"}
        style={{
          boxShadow:
            "0px 1px 2px 0px rgba(0, 0, 0, 0.15) inset, 0px 2px 3px 0px rgba(0, 0, 0, 0.15)",
        }}
        className="w-full py-6 flex nowrap h-[45px] border border-solid border-white"
      >
        <ChatBubbleIcon className="mr-2" /> Buy on Whatsapp
      </Button>
      </Link>
    </section>
  );
}

export default ChatWhatsappBtn;
