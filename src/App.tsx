// eslint-disable-next-line no-use-before-define
import React from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'

function App () {
  return (
    <div className="App">
      <WeatherCard dt={1602104400 * 1000} temp='24' icon='01d' />
    </div>
  )
}

export default App
