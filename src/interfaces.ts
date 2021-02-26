export interface IState {
    episodes: Array<IsingleEpisode>;
    favorites: Array<any>;
}

export interface IAction {
    type: string;
    payload: any;
}

export interface IsingleEpisode {
    _links: { self: { href: string } };
    airdate: string;
    airstamp: string;
    airtime: string;
    id: number;
    image: { medium: string; original: string };
    name: string;
    number: number;
    runtime: number;
    season: number;
    summary: string;
    type: string;
    url: string;
}
