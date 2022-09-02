import React from 'react';
import './CardWeather.css'
import cloud from '../assets/img/cloud.svg'

const CardWeather = () => {
    return (
        <div className='card-weather'>
            <section>
                <h1>The current weather</h1>
                <h2>Ciudad </h2>
            </section>
            <section className='flex-horizontal'>
                <img src={cloud} alt="" />
                <ul className='weather-details'>
                    <li>"scatteres clouds"</li>
                    <li>
                        <span className="material-symbols-outlined">air</span>
                        <span>Wind Speed: 5.14 m/s</span>
                    </li>
                    <li>
                        <span class="material-symbols-outlined">cloudy</span>
                        <span>Clouds: 40%</span>
                    </li>
                    <li>
                        <span class="material-symbols-outlined">tire_repair</span>
                        <span>Pressure: 40 mb</span>
                    </li>
                </ul>
            </section>
            <section>
                <h2>17.97 °C</h2>
            </section>
            <section>
                <button className='btn-degrees'>Degrees °C - °F</button>
            </section>
        </div>
    );
};

export default CardWeather;