import React from 'react'
import './Card.css'

function Card({emoji, heading, detail}) {
  return (
    <div className="card">
        <img src={emoji} alt="" className='object-cover h-32 w-32'/>
        <span>{heading}</span>
        <span>{detail}</span>
        <button className='c-button'>Learn More</button>
    </div>
  )
}

export default Card