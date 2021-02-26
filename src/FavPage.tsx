import React from 'react';
import { toggleFavAction } from './Actions';
import { IEpisodeProps } from './interfaces';

import { Store } from './Store';

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

function FavPage() {
    const { state, dispatch } = React.useContext(Store);

    const props: IEpisodeProps = {
        episodes: state.favorites,
        store: { state, dispatch },
        toggleFavAction,
        favorites: state.favorites,
    };

    return (
        <React.Suspense fallback={<div>loading...</div>}>
            <div className="episode-layout">
                <EpisodesList {...props} />
            </div>
        </React.Suspense>
    );
}

export default FavPage;
