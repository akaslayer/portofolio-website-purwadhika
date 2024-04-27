import React, { useState } from 'react'
import img1 from '../../assets/Hero.png'
import hand from '../../assets/hand.png'
import './style.css'
import { useStateValue } from '../StateContext'

const Hero = () => {
  const { setSidebarOpen } = useStateValue()

  const handleButtonClick = () => {
    setSidebarOpen((prevState) => !prevState)
  }
  return (
    <>
      <div className='section--hero'>
        <div className='pic'>
          <img src={img1} alt='' />
        </div>
        <div className='desc'>
          <h1>WebFlow Developer - UI / UX</h1>
        </div>
        <div className='interact'>
          <button onClick={handleButtonClick}>Hi I'm Hendry</button>
          <div className='icon'>
            <img src={hand} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
