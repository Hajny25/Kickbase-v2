type EventData = {
    e: number;
    pid: string;
    p: number;
    ts: number;
    o: string;
    i: string;
}

type PlayerData = {
    id: string;
    fn: string;
    n: string;
    nr: number;
    t: number;
    p: number;
    pointsDiff: number;
}

type LeagueData = {
    id: string;
    ci: string;
    name: string;
    me: {
        budget: number;
        teamValue: number;
        placement: number;
        points: number;
        ttm: number;
        cmd: number;
        flags: number;
        perms: string[];
        se: boolean;
        csid: number;
        nt: boolean;
        ntv: number;
        nb: number;
        ga: boolean;
        un: number;
    }
}

type PlayerStats = {
    id: string;
    teamId: string;
    teamName: string;
    teamSymbol: string;
    userId: string;
    firstName: string;
    lastName: string;
    profileBig: string;
    status: number;
    position: number;
    averagePoints: number;
    totalPoints: number;
    marketValue: number;
    marketValueTrend: number;
    dayStatus: number;
}

type UserOverviewData = {
    id: string;
    n: string;
    i: string;
    t: number;
    st: number;
    pl: PlayerData[]
}

type PlayerLoadData = {
    pub: {
        sub: string;
        scn: string;
    };
    player_live: {
        e: EventData[]
    };
    player_data: PlayerStats;
    playerId: string;
}

type PubUpdateData = [
    { it: EventData[]; }[], string
]