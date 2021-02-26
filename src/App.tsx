import React from 'react';
import { IAction, IsingleEpisode } from './interfaces';
import { Store } from './Store';

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
    console.log(state);

    return (
        <>
            <header className="header">
                <div>
                    <h1>Rick and Morty</h1>
                    <p>Pick your Favorite episode!!</p>
                </div>
                <div>Favourite(s): {state.favorites.length}</div>
            </header>
            <section className="episode-layout">
                {state.episodes.map((episode: IsingleEpisode) => (
                    <section className="episode-box" key={episode.id}>
                        <img
                            src={episode.image.medium}
                            alt={`Rick and mort ${episode.name}`}
                        />
                        <div>{episode.name}</div>
                        <section>
                            <div>
                                Season: {episode.season} Number:{' '}
                                {episode.number}
                            </div>
                            <button
                                type="button"
                                onClick={() => toggleFavAction(episode)}
                            >
                                {state.favorites.find(
                                    (fav: IsingleEpisode) =>
                                        fav.id === episode.id
                                )
                                    ? 'Unfav'
                                    : 'Fav'}
                            </button>
                        </section>
                    </section>
                ))}
            </section>
        </>
    );
}

export default App;
