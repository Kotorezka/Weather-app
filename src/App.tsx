// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import WeatherForecast from './components/WeatherForecast'
import Cities from './source/Cities.json'
import CitySelector from './components/CitySelector'
import UseForecastFetch from './hooks/UseForecastFetch'
import UseHistoryFetch from './hooks/UseHistoryFetch'
function App () {
  // Custom type to interate JSON
  type IteratorType = keyof typeof Cities
  const [date, setDate] = useState<number>(NaN)
  const [city, setCity] = useState<string>('emptyCity')
  // Current date
  const maxDate: string = (new Date(Date.now())).toLocaleDateString().split('.').reverse().join('-')
  // The day that was 5 days ago before current date (API requirement)
  const minDate: string = (new Date((Date.now() - 1000 * 3600 * 24 * 4))).toLocaleDateString().split('.').reverse().join('-')
  // Custom hook for forecast
  const { forecast, forecastError, isForecastLoading, setForecastUrl } = UseForecastFetch('')
  // Custom hook for history weather
  const { history, historyError, isHistoryLoading, setHistoryUrl } = UseHistoryFetch('')
  // Fetch data for Forecast
  const handleForecastCitySelectorChange = (e: any) => {
    setForecastUrl(`${process.env.REACT_APP_API_URL}lat=${Cities[e as IteratorType].lat}&lon=${Cities[e as IteratorType].lon}&exclude=current,minutely,hourly,alerts&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
  }
  // Fetch data for History weather
  const handleHistorySelectorsChange = (city: string, date: number) => {
    setHistoryUrl(`${process.env.REACT_APP_API_PAST_URL}lat=${Cities[city as IteratorType].lat}&lon=${Cities[city as IteratorType].lon}&dt=${date / 1000}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
  }
  // Handle Date pick event for History weaher
  const handleDateChange = (e: any) => {
    setDate(((new Date(e)).getTime()))
  }
  useEffect(() => {
    if (city !== 'emptyCity' && !isNaN(date)) {
      handleHistorySelectorsChange(city, date)
    }
  }, [date])
  // Handle City pick event for History weaher
  const handleHistoryCitySelectorChange = (e: any) => {
    setCity(e)
  }
  useEffect(() => {
    if (city !== 'emptyCity' && !isNaN(date)) {
      handleHistorySelectorsChange(city, date)
    }
  }, [city])
  const getForecastContent = () => {
    if (forecastError) return <h2>Error when fetching: {forecastError}</h2>
    if (!forecast && isForecastLoading) return <h2>LOADING...</h2>
    if (!forecast) return <h1>placeholder</h1>
    return <WeatherForecast dates={forecast.daily} />
  }
  const getHistoryContent = () => {
    if (historyError) return <h2>Error when fetching: {historyError}</h2>
    if (!history && isHistoryLoading) return <h2>LOADING...</h2>
    if (!history || city === 'emptyCity' || isNaN(date)) return <h1>placeholder</h1>
    console.log(history)
    return <WeatherCard dt={history.current.dt * 1000} temp={history.current.temp} icon={history.current.weather[0].icon} />
  }
  return (
    <div className="App">
     <header className='header'>
      <h1 className='header-title'></h1>
     </header>
     <main className='container'>
     <section className='weather-section forecast'>
     <h2 className='weather-section-title'>7 Days Forecast</h2>
      <CitySelector cities={Cities} handleChange={handleForecastCitySelectorChange}/>
      <div>
      {getForecastContent()}
      </div>
     </section>
     <section className='weather-section history'>
      <h2 className='weather-section-title'>Forecast for a Date in the Past</h2>
      <input type='date' min={minDate} max={maxDate} onChange={e => handleDateChange(e.target.value)}></input>
      <CitySelector cities={Cities} handleChange={handleHistoryCitySelectorChange}/>
      <div>
        {getHistoryContent()}
      </div>
     </section>
     </main>
     <footer className='footer'>
        <span className='footer-title'>С ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT</span>
     </footer>
    </div>
  )
}

export default App
