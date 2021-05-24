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
        <div className='weatherCard-container'>
          <section className='weatherCard-date-container'>
            <span className="weatherCard-date">{`${date.getDate()} ${months[date.getMonth() as MonthsIterator]} ${date.getFullYear()}`}</span>
          </section>
          <section className="weatherCard-icon-container">
            <span className="weatherCard-icon-wrapper"><img className="weatherCard-icon" src={ `${process.env.REACT_APP_ICON_URL}/${props.icon}@2x.png` } /></span>
          </section>
          <section className="weatherCard-temp-container">
            <h1 className="weatherCard-temp">{+props.temp > 0 ? `+${Math.round(+props.temp)}°` : `-${Math.round(+props.temp)}°`}</h1>
          </section>
        </div>
  </div>
  )
}

export default WeatherCard
