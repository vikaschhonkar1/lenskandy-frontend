'use server'

import {config} from "@/lib/api-services/config"
import {refreshTokenFn} from "@/lib/hooks/use-auth"
import { createCookies } from "@/lib/cookies/cookies";

export const refreshToken = async () => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: refreshTokenFn(),
      }),
    };

    let res = await fetch(
      `${config.site.apiBaseUrl}auth/refresh-token`,
      options
    );
    res = await newTokens.json();
    await createCookies("accessToken", res?.data?.accessToken);
    await createCookies("refreshToken", res?.data?.refreshToken);
    return true;
  } catch (err) {
    return false;
  }
};
