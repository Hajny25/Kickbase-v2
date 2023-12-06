import { redirect } from "@sveltejs/kit"
import type { Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {

    if (!event.url.pathname.startsWith("/login")) {
        if (!event.cookies.get("kkstrauth") || !event.cookies.get("kkstrid")) {
            throw redirect(303, "/login")
        }
    }
    return await resolve(event);

}