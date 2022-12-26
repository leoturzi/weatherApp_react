import React from 'react';
import './SearchBar.css';
import magnifyingGlass from '../assets/images/search.png';

function SearchBar() {
    return (
        <div className='search-bar'>
            <input type='text' id='search_bar' />
            <button className='search-bar_icon'>
                <img src={magnifyingGlass} alt='' />
            </button>
        </div>
    );
}

export default SearchBar;
