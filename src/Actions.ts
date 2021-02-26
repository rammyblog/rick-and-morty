import { IAction, IsingleEpisode, IState } from './interfaces';

export const fetchDataAction = async (dispatch: any) => {
    const URL =
        'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const data = await fetch(URL);
    const dataJson = await data.json();
    return dispatch({
        type: 'FETCH_DATA',
        payload: dataJson._embedded.episodes,
    });
};

export const toggleFavAction = (
    state: IState,
    dispatch: any,
    episode: IsingleEpisode | any
): IAction => {
    const episodeInFave = state.favorites.includes(episode);
    let dispatchObj = {
        type: 'ADD_FAV',
        payload: episode,
    };
    if (episodeInFave) {
        const favWithoutEpisode = state.favorites.filter(
            (fav: IsingleEpisode) => fav.id !== episode.id
        );
        dispatchObj = {
            type: 'REMOVE_FAV',
            payload: favWithoutEpisode,
        };
    }
    return dispatch(dispatchObj);
};
