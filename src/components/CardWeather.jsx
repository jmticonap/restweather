import React, { useState, useEffect } from 'react';
import useWeatherAPI from '../assets/hooks/useWeatherAPI';
import './CardWeather.css'
import cloud from '../assets/img/cloud.svg'

const CardWeather = () => {
    const {data: weather, isMetric, setIsMetric} = useWeatherAPI()

    console.log(weather);

    return (
        <div className='card-weather'>
            <section>
                <h1>The current weather</h1>
                <h2>Ciudad: {weather?.name} - {weather?.sys?.country}</h2>
            </section>
            <section className='flex-horizontal'>
                <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
                <ul className='weather-details'>
                    <li>
                        <span></span>
                        <span>"{weather?.weather[0].description}"</span>
                        
                    </li>
                    <li>
                        <span className="material-symbols-outlined">air</span>
                        <span>Wind Speed: {weather?.wind.speed} m/s</span>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">cloudy</span>
                        <span>Clouds: {weather?.clouds.all} %</span>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">tire_repair</span>
                        <span>Pressure: {weather?.main.pressure} hPa</span>
                    </li>
                </ul>
            </section>
            <section>
                <h2>{weather?.main.temp} {isMetric?'°C':'°F'}</h2>
            </section>
            <section>
                <button onClick={()=>{setIsMetric(!isMetric)}} className='btn-degrees'>Degrees °C - °F</button>
            </section>



            {/* <section>
                <h1>The current weather</h1>
                <h2>Ciudad: </h2>
            </section>
            <section className='flex-horizontal'>
                <img src={cloud} alt="" />
                <ul className='weather-details'>
                    <li>
                        <span></span>
                        <span>"cloudy ewrtt"</span>

                    </li>
                    <li>
                        <span className="material-symbols-outlined">air</span>
                        <span>Wind Speed: 17 m/s</span>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">cloudy</span>
                        <span>Clouds: 40%</span>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">tire_repair</span>
                        <span>Pressure: 17 mb</span>
                    </li>
                </ul>
            </section>
            <section>
                <h2>17.97 °C</h2>
            </section>
            <section>
                <button className='btn-degrees'>Degrees °C - °F</button>
            </section> */}
        </div>
    );
};

export default CardWeather;