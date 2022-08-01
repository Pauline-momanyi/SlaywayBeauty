import React from 'react'
import './Stats.css'

function Stats() {
  return (
    <div className='stats space-x-20 pt-20' id='stats'>
        <div className="achievement">
            <div className="circle">8+</div>
            <span>Great</span>
            <span>Saloonists</span>
        </div>
        <div className="achievement">
            <div className="circle">5+</div>
            <span>Makeup</span>
            <span>Artists</span>
        </div>
        <div className="achievement">
            <div className="circle">5+</div>
            <span>Nail</span>
            <span>Artists</span>
        </div>
        <div className="achievement">
            <div className="circle">100+</div>
            <span>happy</span>
            <span>Clients</span>
        </div>
        <div className="blur e-blur1" style={{background:'rgba(255, 99, 71, 0.1)'}}></div>
        {/* <div className="blur e-blur2" style={{background:'rgba(255, 99, 71, 0.1)'}}></div>      */}
    </div>
  )
}

export default Stats