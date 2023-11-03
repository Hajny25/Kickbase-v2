async def get_user_live_diff(c, current_state: dict) -> dict:
    players_raw = await get_user_live_raw(c)
    new_state = _raw_to_state(players_raw)
    diff = {
        i: p - current_state.get(i)
        for i, p in new_state.items()
        if p != current_state.get(i)
    }
    return diff, new_state


async def get_user_live_data(c) -> list[dict]:
    players_raw = await get_user_live_raw(c)
    new_state = _raw_to_state(players_raw)
    positions = {1: "Torwart", 2: "Abwehr", 3: "Mittelfeld", 4: "Sturm"}
    players = [
        {
            "id": p.get("id"),
            "name": f"{p.get('fn')} {p.get('n')}" if p.get("fn") else p.get("n"),
            "img": f"https://kickbase.b-cdn.net/pool/playersbig/{p.get('id')}.png",
            "pos": positions.get(p.get("p")),
            "nr": p.get("nr"),
            "team": p.get("tid"),
            "points": p.get("t"),
        }
        for p in players_raw
    ]
    players.sort(key=lambda x: x.get("points"), reverse=True)
    total_points = sum(p.get("points") for p in players)
    data = {"players": players, "totalPoints": total_points}
    return data, new_state


async def get_user_live_raw(c) -> list[dict]:
    return (await c.get_overview())["u"][-1]["pl"]


def _raw_to_state(data: list[dict]) -> dict:
    return {p.get("id"): p.get("t") for p in data}
