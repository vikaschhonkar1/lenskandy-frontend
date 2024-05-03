"use server";
import APISERVICES from "@/lib/api-services";
import { createCookies } from "@/lib/cookies";
import { redirect } from "next/navigation";


export const logout = async () => {
  const res = await APISERVICES.logout.post();
  if (res?.statusCode === 200) {
    await createCookies("lenskandy_user", "", -100);
    await createCookies("accessToken", "", -100);
    await createCookies("refreshToken", "", -100);
    redirect("/");
  }
};
