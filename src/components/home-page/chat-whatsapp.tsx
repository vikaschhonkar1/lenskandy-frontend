import React from 'react'
import { Button } from '../ui/button'
import { MobileIcon, ChatBubbleIcon, Half1Icon } from "@radix-ui/react-icons";

function ChatWhatsappBtn() {
  return (
    <section className="grid grid-cols-2 py-2 justify-around container gap-2 rounded-lg">
<Button
  variant={"outline"}
  style={{
    boxShadow:
      "0px 1px 2px 0px rgba(0, 0, 0, 0.15) inset, 0px 2px 3px 0px rgba(0, 0, 0, 0.15)",
  }}
  className="py-6 h-[45px] border border-solid border-white">
  <MobileIcon className="mr-2" /> Buy on Call
</Button>
<Button
  variant={"outline"}
  style={{
    boxShadow:
      "0px 1px 2px 0px rgba(0, 0, 0, 0.15) inset, 0px 2px 3px 0px rgba(0, 0, 0, 0.15)",
  }}
  className="py-6 flex nowrap h-[45px] border border-solid border-white">
  <ChatBubbleIcon className="mr-2" /> Buy on Whatsapp
</Button>
</section>
  )
}

export default ChatWhatsappBtn