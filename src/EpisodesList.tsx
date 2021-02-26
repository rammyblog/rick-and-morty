import React from 'react';
import { IsingleEpisode } from './interfaces';

export default function EpisodesList(props: any): Array<JSX.Element> {
    const { episodes, toggleFavAction, favorites, store } = props;
    const { state, dispatch } = store;
    return episodes.map((episode: IsingleEpisode) => (
        <section className="episode-box" key={episode.id}>
            <img
                src={episode.image.medium}
                alt={`Rick and mort ${episode.name}`}
            />
            <div>{episode.name}</div>
            <section
                style={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <div>
                    Season: {episode.season} Number: {episode.number}
                </div>
                <button
                    type="button"
                    onClick={() => toggleFavAction(state, dispatch, episode)}
                >
                    {favorites.find(
                        (fav: IsingleEpisode) => fav.id === episode.id
                    )
                        ? 'Unfav'
                        : 'Fav'}
                </button>
            </section>
        </section>
    ));
}
