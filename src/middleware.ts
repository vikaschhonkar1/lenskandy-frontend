import { NextRequest, NextResponse } from "next/server";
// import { decrypt } from '@/app/lib/session'
import { cookies } from "next/headers";
import { createCookies } from "./lib/cookies";
import { nanoid } from "nanoid";
import { accessToken, user } from "./hooks/useAuth";

export default async function middleware(req: NextRequest) {
  const response = NextResponse.next();

  if (!req.cookies.has("temp_session"))
    response.cookies.set({
      name: "temp_session",
      value: nanoid(),
      path: "/",
      expires: Date.now() + 30 * 24 * 60 * 60 * 1000,
    });

  const currentUrl = req.nextUrl.clone();
  const urlPath = currentUrl.pathname;
  const isAccountsPage =
    urlPath === "/account" || urlPath === "/account/addresses" ? true : false;
  const isLoggedIn = await accessToken();

  if (isAccountsPage && !isLoggedIn && !currentUrl.searchParams.has("login")) {
    currentUrl.searchParams.set("login", "true");
    return NextResponse.redirect(currentUrl);
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.\\.png$).)", "/", "/:path*"],
};
