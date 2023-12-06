import type { PageServerLoad } from "../../../../login/$types"

export const load: PageServerLoad = async ({ fetch, cookies, params }) => {

    const playerId = params.playerId;
    const leagueId = params.leagueId;

    let HEADERS = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${cookies.get("kkstrauth")}`
    }

    const live_player_url = new URL(`https://api.kickbase.com/leagues/${leagueId}/live/players/${playerId}`)
    const live_player_r = await fetch(live_player_url, {
        method: "GET",
        headers: HEADERS,
    });
    const live_player_json = await live_player_r.json()

    const player_data_url = new URL(`https://api.kickbase.com/leagues/${leagueId}/players/${playerId}`)
    const player_data_r = await fetch(player_data_url, {
        method: "GET",
        headers: HEADERS,
    });
    const player_data_json = await player_data_r.json()

    const sub_url = new URL(`https://api.kickbase.com/leagues/${leagueId}/live`)
    const sub_r = await fetch(sub_url, {
        method: "GET",
        headers: HEADERS,
    })
    const sub_json = await sub_r.json()

    return {
        pub: {
            sub: sub_json["rtc"]["sk"],
            scn: sub_json["scn"]
        },
        player_live: live_player_json,
        player_data: player_data_json,
        playerId: playerId
    }

}