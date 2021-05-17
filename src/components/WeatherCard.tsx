// eslint-disable-next-line no-use-before-define
import React, { FunctionComponent } from 'react'

const WeatherCard: FunctionComponent = ({ dt, temp, icon }:any) => {
  const date = new Date(dt)
  return (
    <div>
        <img src={ `http://openweathermap.org/img/wn/${icon}@2x.png` } />
        <p>{temp}</p>
        <p>{date}</p>
    </div>
  )
}

export default WeatherCard
