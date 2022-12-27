import React, { useState, useEffect } from 'react';
import { API_KEY } from '../constant';
import './MainCard.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MainCard() {
    const [mainCard, setMainCard] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=-34.67&lon=-58.71&units=metric&appid=${API_KEY}`
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
            <div className='main-card'>
                <h1>Cargando...</h1>
            </div>
        );
    }

    return (
        <div className='main-card mt-3 mx-auto col-md-3 col-sm-6'>
            <div className='main-card_city'>
                <h4>Merlo, Buenos Aires</h4>
            </div>
            <div className='main-card_weather-body '>
                <div>
                    <Col className='main-card_temperature-value'>
                        {Math.round(mainCard.main.temp)} &#8451;
                    </Col>
                    <Col className='main-card_temperature-icon'>
                        <img
                            src={`http://openweathermap.org/img/wn/${mainCard.weather[0].icon}@2x.png`}
                            alt=''
                        />
                    </Col>
                </div>
                <div className='mx-3 pb-2'>
                    <Col className='main-card_temperature_min justify-content-center'>
                        Min: {mainCard.main.temp_min} &#8451;
                    </Col>
                    <Col className='main-card_temperature_max justify-content-center'>
                        Max: {mainCard.main.temp_max} &#8451;
                    </Col>
                </div>
                <ul className='main-card_weather-info py-3 px-4'>
                    <li>
                        <span>Feels like:</span>{' '}
                        <span>{mainCard.main.feels_like} &#8451;</span>
                    </li>
                    <li>
                        <span>Pressure:</span>{' '}
                        <span>{mainCard.main.pressure} Hpa</span>
                    </li>
                    <li>
                        <span>Humidity:</span>{' '}
                        <span>{mainCard.main.humidity} %</span>
                    </li>
                    <li>
                        <span>Wind Speed:</span>{' '}
                        <span>{mainCard.wind.speed} km/h</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MainCard;
