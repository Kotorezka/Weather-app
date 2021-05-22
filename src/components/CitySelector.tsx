// eslint-disable-next-line no-use-before-define
import React from 'react'

interface CitySelectorProps {
    cities:object,
    handleChange : (e:any) => void
}

const CitySelector = (props : CitySelectorProps) => {
  const citiesArray = []
  for (const key in props.cities) {
    if (key !== 'empty') {
      citiesArray.push(key)
    }
  }
  return (
    <select onChange={(event) => props.handleChange(event.target.value)}>
        <option value='empty' selected disabled hidden>Select city</option>
        {citiesArray.map(item => (
            <option key={item} value={item}>{item}</option>
        ))}
            </select>
  )
}

export default CitySelector
