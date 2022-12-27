import React, { useState } from 'react';
import Forecast from '../../components/Forecast';
import MainCard from '../../components/MainCard';
import SearchBar from '../../components/SearchBar';

function Main() {
    const [state, setState] = useState(null);

    const updateState = () => {
        setState((state, newState) => {
            state = newState;
        });
    };

    return (
        <main className='container'>
            <MainCard />
            <SearchBar />
            <Forecast />
        </main>
    );
}

export default Main;
