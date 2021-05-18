// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import Cities from './source/Cities.json'

function App () {
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  return (
    <div className="App">
      <WeatherCard dt={1602104400 * 1000} temp='24' icon='01d' />
    </div>
  )
}

export default App
