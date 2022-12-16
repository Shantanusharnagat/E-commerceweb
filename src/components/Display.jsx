import React from 'react'
import './display.css'
import man from "../images/Media/Blazer.png"


const Display = () => {
  return (
    <div className='pop'>

       
        <div className='imstxt'>
       
            <p className='header'>TOP SALE OF THIS WEEK</p>
            <h1 className="bgpara">Explore Amazing Fashionable Blazers This Shadi Season</h1>
            <button className='btn1'>Shop Now</button>
            <button className='btn2'>Learn More</button>
        </div>
        <div className='man'>
        <img src={man} className="man" alt="man"/>
        </div>
        
        
        
        
        
    </div>
  )
}

export default Display