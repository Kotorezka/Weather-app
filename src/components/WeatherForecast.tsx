// eslint-disable-next-line no-use-before-define
import React from 'react'
import WeatherCard from '../components/WeatherCard'

interface WeatherForecastProps {
    dates : any[]
}
const WeatherForecast = (props : WeatherForecastProps) => {
  return (
    <div className='weatherForecast'>
        <div className='weatherForecast-container'>
            <WeatherCard dt={props.dates[0].dt * 1000} temp={props.dates[0].temp.day} icon={props.dates[0].weather[0].icon}/>
            <WeatherCard dt={props.dates[1].dt * 1000} temp={props.dates[1].temp.day} icon={props.dates[1].weather[0].icon}/>
            <WeatherCard dt={props.dates[2].dt * 1000} temp={props.dates[2].temp.day} icon={props.dates[2].weather[0].icon}/>
            <WeatherCard dt={props.dates[3].dt * 1000} temp={props.dates[3].temp.day} icon={props.dates[3].weather[0].icon}/>
            <WeatherCard dt={props.dates[4].dt * 1000} temp={props.dates[4].temp.day} icon={props.dates[4].weather[0].icon}/>
            <WeatherCard dt={props.dates[5].dt * 1000} temp={props.dates[5].temp.day} icon={props.dates[5].weather[0].icon}/>
            <WeatherCard dt={props.dates[6].dt * 1000} temp={props.dates[6].temp.day} icon={props.dates[6].weather[0].icon}/>
        </div>
    </div>
  )
}

export default WeatherForecast
