import React, { useState, useEffect } from 'react';
import { getHours } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

function Forecast() {
    const [forecastCards, setForecastCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(
            'https://api.openweathermap.org/data/2.5/forecast?lat=-34.67&lon=-58.71&cnt=5&units=metric&appid=729134e5477f7d492bfaa4f690bb46ac'
        )
            .then((response) => response.json())
            .then((data) => {
                const dataForecast = data.list;
                const dataForecastFormatted = dataForecast.map(
                    (dayForecast) => {
                        const dateTz = utcToZonedTime(
                            new Date(dayForecast.dt * 1000),
                            'America/Buenos_Aires'
                        );
                        const hour = getHours(dateTz);
                        return {
                            hour,
                            temp_min: dayForecast.main.temp_min,
                            temp_max: dayForecast.main.temp_max,
                            icon: dayForecast.weather[0].icon,
                        };
                    }
                );
                const forecastCards = dataForecastFormatted.map(
                    (dataForecastCard, idx) => {
                        return (
                            <div key={idx} className='forecast-card'>
                                <div className='forecast-card_day'>
                                    {dataForecastCard.hour}{' '}
                                    {dataForecastCard.hour < 12 ? 'am' : 'pm'}
                                </div>
                                <div className='forecast-card_icon'>
                                    <img
                                        src={`http://openweathermap.org/img/wn/${dataForecastCard.icon}@2x.png`}
                                        alt=''
                                    />
                                </div>
                                <div className='forecast-card_temp-min'>
                                    {dataForecastCard.temp_min}
                                </div>
                                <div className='forecast-card_temp-max'>
                                    {dataForecastCard.temp_max}
                                </div>
                            </div>
                        );
                    }
                );
                setForecastCards(forecastCards);
                setIsLoading(false);
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
        <div className='forecast'>
            <h3>15 hr forecast</h3>
            <div className='forecast-container d-flex'>{forecastCards}</div>
        </div>
    );
}

export default Forecast;
