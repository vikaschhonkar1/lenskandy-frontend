"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const allCookies = (name: string) => {
  return cookies().get(name)?.value || "";
};
export const logOut = () => {
  cookies().getAll().forEach((cookie) => {
    cookies().delete(cookie.name);
  });
  redirect('/')
};
export const accessToken = () => allCookies("accessToken");
export const sessionId = () => allCookies("temp_session")
export const refreshTokenFn = () => allCookies("refreshToken");
export const user = () => {
  const user = allCookies("lenskandy_user");
  return user ? JSON.parse(user) : '';
};
