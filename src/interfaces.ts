export interface IState {
    episodes: Array<IsingleEpisode>;
    favorites: Array<IsingleEpisode>;
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

export interface IEpisodeProps {
    episodes: IsingleEpisode[];
    store: { state: IState; dispatch: any };
    toggleFavAction: (
        state: IState,
        dispatch: any,
        episode: IsingleEpisode
    ) => IAction;
    favorites: Array<IsingleEpisode>;
}
