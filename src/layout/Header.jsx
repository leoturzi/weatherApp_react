import React from 'react';

function Header() {
    return (
        <header>
            <div className='logo-cont'>
                <img src='' alt='Sun-day' />
            </div>
            <div className='measure-options'>
                <div className='option active'>F</div>
                <div className='option'>C</div>
            </div>
        </header>
    );
}

export default Header;
