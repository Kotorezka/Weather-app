// eslint-disable-next-line no-use-before-define
import React from 'react'
import placeholder from '../assets/placeholders/placeholder.svg'
const Placeholder = () => {
  return (
    <section className='placeholder-wrapper'>
        <span className='placeholder-image-wrapper'>
            <img className='placeholder-image' alt='placholder-image' src={placeholder} />
        </span>
        <span className='placeholder-text'>
            Fill in all the fields and the weather will be displayed
        </span>
    </section>
  )
}

export default Placeholder
