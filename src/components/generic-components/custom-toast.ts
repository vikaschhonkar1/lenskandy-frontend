"use client";
import { toast } from "sonner";

export const CustomToast = (message: string = "message") => {
  toast(message);
};
