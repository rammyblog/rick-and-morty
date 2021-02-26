import React from 'react';
import { fetchDataAction, toggleFavAction } from './Actions';
import { IAction, IEpisodeProps, IsingleEpisode } from './interfaces';
import { Store } from './Store';

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

function Home(): JSX.Element {
    const { state, dispatch } = React.useContext(Store);

    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction(dispatch);
    });

    const props: IEpisodeProps = {
        episodes: state.episodes,
        store: { state, dispatch },
        toggleFavAction,
        favorites: state.favorites,
    };
    return (
        <>
            <React.Suspense fallback={<div>loading...</div>}>
                <section className="episode-layout">
                    <EpisodesList {...props} />
                </section>
            </React.Suspense>
        </>
    );
}

export default Home;
