import { cookies } from "next/headers";

export const allCookies = () => {
    return cookies().getAll().toString()
}