import React from 'react';
import { Store } from './Store';
function App(): JSX.Element {
    interface IsingleEpisode {
        _links: object;
        airdate: string;
        airstamp: string;
        airtime: string;
        id: number;
        image: { medium: string; original: string};
        name: string;
        number: number;
        runtime: number;
        season: number;
        summary: string;
        type: string;
        url: string;
    }
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

    console.log(state);

    return (
        <>
            <h1>Rick and Morty</h1>
            <p>Pick your Favorite episode!!</p>
            <section>
                {state.episodes.map((episode: IsingleEpisode) => (
                    <section key={episode.id}>
                        <img
                            src={episode.image.medium}
                            alt={`Rick and mort ${episode.name}`}
                        />
                    </section>
                ))}
            </section>
        </>
    );
}

export default App;
