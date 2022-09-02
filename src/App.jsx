import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CardWeather from './components/CardWeather'
import background_day from './assets/img/background_city.svg'
import background_night from './assets/img/background_city_dark.svg'

function App() {

  return (
    <div className="App">
      <img className='background_day' src={background_day} />
      <CardWeather />
    </div>
  )
}

export default App
