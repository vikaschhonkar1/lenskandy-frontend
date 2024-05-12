import { NextRequest, NextResponse } from "next/server";
// import { decrypt } from '@/app/lib/session'
import { cookies } from "next/headers";
import { createCookies } from "./lib/cookies";
import { nanoid } from "nanoid";

export default async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  response.cookies.set({
    name: "temp_session",
    value: "new",
    path: "/",
    expires: 23,
  });

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.\\.png$).)"],
};
