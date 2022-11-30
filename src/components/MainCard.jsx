import React, { useState, useEffect } from 'react';

function MainCard() {
    const [mainCard, setMainCard] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?lat=-34.67&lon=-58.71&units=metric&appid=729134e5477f7d492bfaa4f690bb46ac'
        )
            .then((response) => response.json())
            .then((data) => {
                setMainCard(data);
                setIsLoading(false);
                console.log(data);
            });
    }, []);
    if (isLoading) {
        return (
            <div className='main-card col-md-6 m-auto'>
                <h1>Cargando...</h1>
            </div>
        );
    }

    return (
        <div className='main-card col-md-6 m-auto'>
            <div className='main-card_city'>
                <h4>Merlo, Buenos Aires, Argentina</h4>
            </div>
            <div className='main-card_temperature-value'>
                {mainCard.main.temp}
            </div>
            <div className='main-card_temperature-icon'>
                <img
                    src={`http://openweathermap.org/img/wn/${mainCard.weather[0].icon}@2x.png`}
                    alt=''
                />
            </div>
            <div className='main-card_temperature_min'>
                {mainCard.main.temp_min}
            </div>
            <div className='main-card_temperature_max'>
                {mainCard.main.temp_max}
            </div>
            <ul>
                <li>Feels like: {mainCard.main.feels_like}</li>
                <li>Pressure: {mainCard.main.pressure}</li>
                <li>Humidity: {mainCard.main.humidity}</li>
                <li>Wind Speed: {mainCard.wind.speed}</li> {/*viene en m/seg*/}
            </ul>
        </div>
    );
}

export default MainCard;
