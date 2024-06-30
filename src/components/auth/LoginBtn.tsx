"use client";
import React from "react";
import { Button } from "../ui/button";
import { logOut } from "@/hooks/useAuth";
import { addLoginParam } from "../login";
import { User2Icon, UserCircle, UserCircle2Icon } from "lucide-react";
import { FaUser } from "react-icons/fa6";

function LogInBtn() {
  return (
    <div className="p-2 px-4">
      <div className="flex mt-2 gap-2">
        <div className="pt-2">
          <FaUser size={28} />
        </div>
        <div className="pr-2 flex flex-col ">
          {/* <div className="">Hi Guest!!</div>
          <div>
            Login or Signup to track to track your orders and get access to
            exclusive deals.
          </div> */}
          <p className="font-medium">Hi Guest!!</p>
          <p className="text-sm text-gray-600">
            Login or Signup to track your orders and get access to exclusive
            deals.
          </p>
        </div>
      </div>
      <div className="w-full mt-2">
        <Button onClick={addLoginParam} className="left-2 right-2 w-full mt-2">
          Login/Signup
        </Button>
      </div>
    </div>
  );
}

export default LogInBtn;
