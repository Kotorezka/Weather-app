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
        <img src={ `${process.env.REACT_APP_ICON_URL}/${props.icon}@2x.png` } />
        <p>{props.temp}</p>
        <p>{date.toLocaleDateString()}</p>
    </div>
  )
}

export default WeatherCard
