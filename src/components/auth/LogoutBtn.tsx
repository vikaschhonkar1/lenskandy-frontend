"use client";
import React from "react";
import { Button } from "../ui/button";
import { logOut } from "@/hooks/useAuth";

function LogoutBtn() {
  return (
    <Button onClick={()=>logOut()} className="fixed bottom-2 left-2 right-2">
      Log Out
    </Button>
  );
}

export default LogoutBtn;
