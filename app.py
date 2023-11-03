from aiohttp import web
import aiohttp_jinja2
import jinja2
import asyncio

from utils.utils import get_user_live_data, get_user_live_diff
from client import Client

UPDATE_DELAY = 3

app = web.Application()
routes = web.RouteTableDef()
aiohttp_jinja2.setup(app, loader=jinja2.FileSystemLoader("templates/"))
current_state = {}
c = 0


@routes.get("/")
async def index(request):
    global current_state
    data, current_state = await get_user_live_data(c)

    return aiohttp_jinja2.render_template("index.html", request, data)


@routes.get("/ws")
async def websocket(request):
    global current_state
    ws = web.WebSocketResponse()
    await ws.prepare(request)

    while True:
        diff, current_state = await get_user_live_diff(c, current_state)

        if diff:
            await ws.send_json(diff)

        await asyncio.sleep(UPDATE_DELAY)

    return ws


async def setup_client(app):
    global c
    c = Client()


def init_func(argv):
    app.add_routes(routes)
    app.router.add_static("/static/", "./static/")
    app.on_startup.append(setup_client)
    web.run_app(app)
