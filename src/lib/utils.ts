import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import dayjs from "dayjs";

export function ReadableDateTime(date: any) {
  return dayjs(date).format("ddd, MMM D, YYYY / h:mm A");
}
export function ReadableDate(date: any) {
  return dayjs(date).format("ddd, MMM D, YYYY");
}
