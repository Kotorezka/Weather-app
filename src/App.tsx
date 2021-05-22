// eslint-disable-next-line no-use-before-define
import React from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import Cities from './source/Cities.json'
import CitySelector from './components/CitySelector'
import UseFetch from './hooks/UseFetch'
function App () {
  type Key = keyof typeof Cities
  const { data, error, isLoading, setUrl } = UseFetch('')
  const handleChange = (e: any) => {
    setUrl(`${process.env.REACT_APP_API_URL}lat=${Cities[e as Key].lat}&lon=${Cities[e as Key].lon}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
  }
  const getContent = () => {
    if (error) return <h2>Error when fetching: {error}</h2>
    if (!data && isLoading) return <h2>LOADING...</h2>
    if (!data) return <h1>placeholder</h1>
    return <WeatherCard dt={data.current.dt * 1000} temp={data.current.temp} icon={data.current.weather[0].icon} />
  }
  return (
    <div className="App">
     <div>
      <CitySelector cities={Cities} handleChange={handleChange}/>
      <div>
      {getContent()}
      </div>
     </div>
     <div>

     </div>
    </div>
  )
}

export default App
