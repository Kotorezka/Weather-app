// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import Cities from './source/Cities.json'
import CitySelector from './components/CitySelector'

function App () {
  const [lat, setLat] = useState<any>([])
  const [lon, setLon] = useState<any>([])
  const [data, setData] = useState<any>([])
  useEffect(() => {
    const fetchData = async () => {
      setLat(Cities.Samara.lat)
      setLon(Cities.Samara.lon)
      await fetch(`${process.env.REACT_APP_API_URL}lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result)
        })
    }
    fetchData()
  }, [lat, lon])
  return (
    <div className="App">
      {(typeof data.current !== 'undefined') ? (<WeatherCard dt={data.current.dt * 1000} temp={data.current.temp} icon={data.current.weather[0].icon} />) : (<div><CitySelector cities={Cities} /></div>)}
    </div>
  )
}

export default App
