import React from 'react';
import { IAction, IsingleEpisode } from './interfaces';
import { Store } from './Store';

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

function App(): JSX.Element {
    const { state, dispatch } = React.useContext(Store);

    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction();
    });

    const fetchDataAction = async () => {
        const URL =
            'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
        const data = await fetch(URL);
        const dataJson = await data.json();
        return dispatch({
            type: 'FETCH_DATA',
            payload: dataJson._embedded.episodes,
        });
    };

    const toggleFavAction = (episode: IsingleEpisode): IAction => {
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
    const props = {
        episodes: state.episodes,
        toggleFaveAction: toggleFavAction,
        favorites: state.favorites,
    };
    return (
        <header>
            <header className="header">
                <div>
                    <h1>Rick and Morty</h1>
                    <p>Pick your Favorite episode!!</p>
                </div>
                <div>Favourite(s): {state.favorites.length}</div>
            </header>
            <React.Suspense fallback={<div>loading...</div>}>
                <section className="episode-layout">
                    <EpisodesList {...props} />
                </section>
            </React.Suspense>
        </header>
    );
}

export default App;
