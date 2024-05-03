'use server'

import { cookies } from 'next/headers'

export async function createCookies(name, value, minutes = 15, days = 0) {
    cookies().set({
        name,
        value,
        httpOnly: true,
        path: '/',
        expires: new Date(Date.now() + (minutes * 60 * 1000) + (days * 24 * 60 * 60 * 1000))
    })
}