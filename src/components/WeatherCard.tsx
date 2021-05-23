// eslint-disable-next-line no-use-before-define
import React from 'react'

interface WeatherCardProps {
  dt: number,
  temp: string,
  icon: string,
}

const WeatherCard = (props : WeatherCardProps) => {
  const date = new Date(props.dt)
  const months = {
    0: 'jan',
    1: 'feb',
    2: 'mar',
    3: 'apr',
    4: 'may',
    5: 'jun',
    6: 'jul',
    7: 'aug',
    8: 'sep',
    9: 'oct',
    10: 'nov',
    11: 'dec'
  }
  type MonthsIterator = keyof typeof months
  return (
    <div className='weatherCard'>
        <span className="weatherCard-date">{`${date.getDate()} ${months[date.getMonth() as MonthsIterator]} ${date.getFullYear()}`}</span>
        <span className="weatherCard-icon"><img src={ `${process.env.REACT_APP_ICON_URL}/${props.icon}@2x.png` } /></span>
        <span className="weatherCard-temp">{+props.temp > 0 ? `+${Math.round(+props.temp)}°` : `-${Math.round(+props.temp)}°`}</span>
  </div>
  )
}

export default WeatherCard
