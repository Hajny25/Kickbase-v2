import { fail, redirect } from '@sveltejs/kit'
import type { Action, Actions } from '@sveltejs/kit';

const login: Action = async ({ fetch, cookies, request }) => {
    const data = await request.formData();
    const username = data.get('username')
    const password = data.get('password')

    if (
        typeof username !== 'string' ||
        typeof password !== 'string' ||
        !username ||
        !password
    ) {
        return fail(400, { invalid: true })
    }

    const loginBody = {
        "email": username,
        "password": password,
        "ext": false
    }

    const HEADERS = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

    const url = new URL("https://api.kickbase.com/user/login")

    const r = await fetch(url, {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify(loginBody)
    })

    if (!r.ok) {
        return fail(400, { credentials: true })
    }

    const json = await r.json()
    const token = json["token"]
    const expirationDate = json["tokenExp"]

    cookies.set('kkstrauth', token, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: (Date.parse(expirationDate) - Date.now()) / 1000
    })
    cookies.set('kkstrid', json["user"]["id"], {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: (Date.parse(expirationDate) - Date.now()) / 1000
    })

    throw redirect(302, '/')
}

export const actions: Actions = { 
    default: login
}
