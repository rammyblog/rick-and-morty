import React from 'react';
import { Store } from './Store';
import { Link } from '@reach/router';

function App(props: any): JSX.Element {
    const { state } = React.useContext(Store);

    return (
        <>
            <header>
                <header className="header">
                    <div>
                        <h1>Rick and Morty</h1>
                        <p>Pick your Favorite episode!!</p>
                    </div>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/faves">
                            Favourite(s): {state.favorites.length}
                        </Link>
                    </div>
                </header>
            </header>
            {props.children}
        </>
    );
}

export default App;
