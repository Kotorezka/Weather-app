// eslint-disable-next-line no-use-before-define
import React from 'react'

interface WeatherCardProps {
  dt: number,
  temp: string,
  icon: string,
}

const WeatherCard = (props : WeatherCardProps) => {
  const date = new Date(props.dt)
  return (
    <div>
        <img src={ `http://openweathermap.org/img/wn/${props.icon}@2x.png` } />
        <p>{props.temp}</p>
        <p>{date.toString()}</p>
    </div>
  )
}

export default WeatherCard
