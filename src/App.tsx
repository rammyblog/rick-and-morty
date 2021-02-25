import React from 'react';
import { Store } from './Store';
function App(): JSX.Element {
    const { state, dispatch } = React.useContext(Store);
    return (
        <>
            <h1>Rick and Morty</h1>
            <p>Pick your Favorite episode!!</p>
        </>
    );
}

export default App;
