import React from 'react';
import ApiLoad from './api';

function Home() {
    const hLoad = () => {
        ApiLoad();
    }

    return(
        <div>
            <button  >Load</button>
            <p>Load</p>
            <p>Reset</p>
            <p>Add</p>
            <p>Licznik: </p>
        </div>
    )
}

export default Home;