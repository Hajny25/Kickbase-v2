import type { PageServerLoad } from "./login/$types";

export const load: PageServerLoad = async ({ fetch, cookies }) => {

    let HEADERS = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${cookies.get("kkstrauth")}`
    }

    const url = new URL(`https://api.kickbase.com/leagues/`)
    const r = await fetch(url, {
        method: "GET",
        headers: HEADERS,
    })
    const json = await r.json()

    let leagues = json["leagues"]
    for (let i = 0; i < leagues.length; i++) {
        const league = leagues[i];
        const url = new URL(`https://api.kickbase.com/leagues/${league.id}/me`)
        const r = await fetch(url, {
            method: "GET",
            headers: HEADERS,
        })
        const json = await r.json()
        league["me"] = json
    }


    return {
        leagues
    }
}