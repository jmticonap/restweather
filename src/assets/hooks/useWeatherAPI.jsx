import React, { useEffect, useState } from 'react';
import axios from 'axios'

const useWeatherAPI = () => {
    const huarmey = { latitude: -10.0707608, longitude: -78.150556 }
    const [isMetric, setIsMetric] = useState(true)
    const [geolocation, setGeolocation] = useState(huarmey)
    const [data, setData] = useState()

    const loadData = () => {
        if (geolocation) {
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?lat=${geolocation.latitude}&lon=${geolocation.longitude}&appid=7c0e84122936f7d569290b8a8466d381&units=${isMetric?'metric':'standard'}&lang=es`)
                .then(res => setData(res.data))
        }
    }
    const getGeolocation = (pos) => {
        setGeolocation(pos.coords)
    }
    const failGeolocation = (err) => {
        console.log(err)
        setGeolocation(huarmey)
    }

    useEffect(() => navigator.geolocation.getCurrentPosition(getGeolocation, failGeolocation), [])
    useEffect(() => loadData(), [geolocation, isMetric])

    return { data, isMetric, setIsMetric }
};

export default useWeatherAPI;