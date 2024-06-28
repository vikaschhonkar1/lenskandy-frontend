import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { nanoid } from "nanoid";
import { accessToken } from "./hooks/useAuth";

export default async function middleware(req: NextRequest) {
  const response = NextResponse.next();

  // Redirect HTTP to HTTPS
  if (req.nextUrl.protocol === 'http:') {
    const secureUrl = `https://${req.nextUrl.host}${req.nextUrl.pathname}${req.nextUrl.search}`;
    return NextResponse.redirect(secureUrl);
  }

  // Set a temporary session cookie if not already set
  if (!req.cookies.has("temp_session")) {
    response.cookies.set({
      name: "temp_session",
      value: nanoid(),
      path: "/",
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    });
  }

  const currentUrl = req.nextUrl.clone();
  const urlPath = currentUrl.pathname;
  const isAccountsPage =
    urlPath === "/account" || urlPath === "/account/addresses" || urlPath === "/account/orders";
  const isLoggedIn = await accessToken();

  // Redirect to login if accessing account pages without being logged in
  if (isAccountsPage && !isLoggedIn && !currentUrl.searchParams.has("login")) {
    currentUrl.searchParams.set("login", "true");
    return NextResponse.redirect(currentUrl);
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.\\.png$).)", "/", "/:path*"],
};
