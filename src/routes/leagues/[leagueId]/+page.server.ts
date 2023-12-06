import type { PageServerLoad } from "../../login/$types";

export const load: PageServerLoad = async ({ fetch, cookies, params, parent }) => {


    const leagueId = params.leagueId;
    let HEADERS = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${cookies.get("kkstrauth")}`
    }

    const live_url = new URL(`https://api.kickbase.com/leagues/${leagueId}/live`)
    const live_r = await fetch(live_url, {
        method: "GET",
        headers: HEADERS,
    })
    const live_json = await live_r.json()

    const league_url = new URL(`https://api.kickbase.com/leagues/`)
    const league_r = await fetch(league_url, {
        method: "GET",
        headers: HEADERS,
    })
    const league_json = await league_r.json()

    return {
        id: cookies.get("kkstrid"),
        leagueId: leagueId,
        pub: {
            sub: live_json["rtc"]["sk"],
            scn: live_json["scn"]
        },
        users: live_json["u"],
        leagues: league_json["leagues"],
    };
}