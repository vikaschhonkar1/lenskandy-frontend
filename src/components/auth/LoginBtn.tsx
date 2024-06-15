"use client";
import React from "react";
import { Button } from "../ui/button";
import { logOut } from "@/hooks/useAuth";
import { addLoginParam } from "../login";

function LogInBtn() {
  return (
    <Button onClick={addLoginParam} className="fixed bottom-2 left-2 right-2">
      Log In
    </Button>
  );
}

export default LogInBtn;
