import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CardWeather from './components/CardWeather'
import Background from './components/Background'

function App() {

  return (
    <div className="App">
      <Background />
      <CardWeather />
    </div>
  )
}

export default App
