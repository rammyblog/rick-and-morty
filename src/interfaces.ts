import React from 'react';
export type Dispatch = React.Dispatch<IAction>;
export interface IState {
    episodes: Array<IsingleEpisode>;
    favorites: Array<IsingleEpisode>;
}

export interface IAction {
    type: string;
    payload: Array<IsingleEpisode> | any;
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
    store: { state: IState; dispatch: Dispatch };
    toggleFavAction: (
        state: IState,
        dispatch: Dispatch,
        episode: IsingleEpisode
    ) => IAction;
    favorites: Array<IsingleEpisode>;
}
