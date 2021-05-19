// eslint-disable-next-line no-use-before-define
import React from 'react'

interface CitySelectorProps {
    cities:object,
}

const CitySelector = (props : CitySelectorProps) => {
  const citiesArray = []
  for (const key in props.cities) {
    citiesArray.push(key)
  }
  return (
    <select>
        <option value='empty' selected disabled hidden>Select city</option>
        {citiesArray.map(item => (
            <option key={item} value={item}>{item}</option>
        ))}
            </select>
  )
}

export default CitySelector
