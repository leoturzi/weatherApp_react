import React from 'react';
import Forecast from '../components/Forecast';
import MainCard from '../components/MainCard';
import SearchBar from '../components/SearchBar';

function Main() {
    return (
        <main className='container'>
            <MainCard />
            <SearchBar />
            <Forecast />
        </main>
    );
}

export default Main;
