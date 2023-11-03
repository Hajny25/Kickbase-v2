import requests
import os
import aiohttp
import json
import asyncio

BASE_URL = "https://api.kickbase.com"
ID = 2889267
LEAGUE_ID = 2425000
BUNDESLIGA_TEAMS_IDS = [2, 3, 4, 5, 7, 9, 10,
                        11, 13, 14, 15, 18, 24, 28, 40, 42, 43, 50]


class Client:
    def __init__(self):
        self.session = aiohttp.ClientSession(
                BASE_URL,
                headers=self.login(),
                raise_for_status=True
                )
        self.league = LEAGUE_ID

    def login(self) -> dict:
        data = {"email": os.environ.get("KICKBASE_USER"),
                "password": os.environ.get("KICKBASE_PASSWORD"),
                "ext": False}
        headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }

        r = requests.post(
            BASE_URL + "/user/login", data=json.dumps(data), headers=headers
        )
        r.raise_for_status()
        headers["Cookie"] = f"kkstrauth={r.json()['token']}"
        return headers

    async def get_me(self) -> dict:
        return await self._get(f"/leagues/{self.league}/me")

    async def get_market(self) -> dict:
        return await self._get(f"/leagues/{self.league}/market")

    async def get_available_players(self) -> set[int]:
        tasks_taken = [self.get_user_players(user) for user in await self.get_league_users()]
        tasks_all = [self.get_team_players(team_id)
                     for team_id in BUNDESLIGA_TEAMS_IDS]
        taken_players = set(await asyncio.gather(*tasks_taken))
        all_players = set(await asyncio.gather(*tasks_all))

        return all_players.difference(taken_players)

    async def get_league_users(self) -> list[int]:
        r = await self._get(f"/leagues/{self.league}/users")
        return (user["id"] for user in r["users"])

    async def get_user_players(self, user_id: int) -> list[int]:
        r = await self._get(f"/leagues/{self.league}/users/{user_id}/players")
        return (player["id"] for player in r["players"])

    async def get_team_players(self, team_id: int) -> list[int]:
        r = await self._get(f"/competition/teams/{team_id}/players")
        return (player["id"] for player in r["p"])

    async def get_player_info(self, player_id: int) -> dict:
        return await self._get(f"/leagues/{self.league}/players/{player_id}")

    async def get_overview(self) -> dict:
        return await self._get(f"/leagues/{self.league}/live")

    async def get_live_player_history(self, player_id: int) -> dict:
        return await self._get(f"/leagues/{self.league}/live/players/{player_id}")

    async def get_user_live(self, user_id: int) -> list[dict]:
        players = await self.get_user_players(user_id)
        tasks = [
            self._get(
                f"/leagues/{self.league}/live/players/{player}", ssl=False)
            for player in players
        ]
        return [await response.json() for response in await asyncio.gather(*tasks)]

    async def _get(self, url: str) -> dict:
        try:
            async with self.session.get(url) as r:
                return await r.json()
        except aiohttp.ClientResponseError as e:
            raise SystemExit(e)
