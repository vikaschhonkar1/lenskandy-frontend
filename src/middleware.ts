import { NextRequest, NextResponse } from "next/server";
// import { decrypt } from '@/app/lib/session'
import { cookies } from "next/headers";
import { createCookies } from "./lib/cookies";
import { nanoid } from "nanoid";

export default async function middleware(req: NextRequest) {
  const response = NextResponse.next();

  if (!req.cookies.has("temp_session"))
    response.cookies.set({
      name: "temp_session",
      value: nanoid(),
      path: "/",
      expires: Date.now() + 30 * 24 * 60 * 60 * 1000,
    });

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.\\.png$).)", "/"],
};
