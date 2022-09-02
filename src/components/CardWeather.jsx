import React, { useState, useEffect } from 'react';
import useWeatherAPI from '../assets/hooks/useWeatherAPI';
import './CardWeather.css'
import cloud from '../assets/img/cloud.svg'

const CardWeather = () => {
    const geo_moscu = {latitude:55.752047,longitude:37.6175026}
    const geo_new_york = {latitude:40.7084957,longitude:-74.0109972}
    const geo_madrid = {latitude:40.4152955,longitude:-3.6835977}
    const { 
        data: weather, 
        isMetric, 
        setIsMetric, 
        setLocation } = useWeatherAPI()

    return (
        <div className='main-container'>
            <div className='others-cities-container'>
                <ul>
                    <li>
                        <button onClick={()=>setLocation()}>Current</button>
                    </li>
                    <li>
                        <button onClick={()=>setLocation(geo_new_york)}>New York</button>
                    </li>
                    <li>
                        <button onClick={()=>setLocation(geo_madrid)}>Madrid</button>
                    </li>
                    <li>
                        <button onClick={()=>setLocation(geo_moscu)}>Mosku</button>
                    </li>
                </ul>
            </div>
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
                        <li>
                            <span className="material-symbols-outlined">humidity_mid</span>
                            <span>Humidity: {weather?.main.humidity} %</span>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">device_thermostat</span>
                            <span>Temp max: {weather?.main.temp_max} {isMetric ? '°C' : '°F'}</span>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">device_thermostat</span>
                            <span>Temp min: {weather?.main.temp_min} {isMetric ? '°C' : '°F'}</span>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>{weather?.main.temp} {isMetric ? '°C' : '°F'}</h2>
                </section>
                <section>
                    <button onClick={() => { setIsMetric(!isMetric) }} className='btn-degrees'>Degrees °C - °F</button>
                </section>
            </div>
        </div>


    );
};

export default CardWeather;