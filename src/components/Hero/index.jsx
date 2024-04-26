import React, { useState } from 'react'
import img1 from '../../assets/Hero.png'
import hand from '../../assets/hand.png'
import './style.css'
import xIcon from '../../assets/X.png'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <div className='section--hero'>
        <div className={`menu-toogle-${menu ? 'show' : ''}`}>
          <div className='menu'>
            <div className='menu--list'>
              <div className='menu--item'>
                <a href=''>Home</a>
              </div>
              <div className='menu--item'>
                <HashLink to='/#about'>About</HashLink>
              </div>
              <div className='menu--item'>
                <HashLink to='/#work'>Work</HashLink>
              </div>
              <div className='menu--item'>
                <Link to='/contact'>Contact</Link>
              </div>
            </div>
            <nav>
              <ul>
                <li>Linkedin</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Webflow</li>
              </ul>
            </nav>
            <button onClick={() => setMenu(!menu)}>
              <span>
                <i className='ri-twitter-x-line'></i>
              </span>
            </button>
          </div>
        </div>
        <div className='pic'>
          <img src={img1} alt='' />
        </div>
        <div className='desc'>
          <h1>WebFlow Developer - UI / UX</h1>
        </div>
        <div className='interact'>
          <button onClick={() => setMenu(!menu)}>Hi I'm Hendry</button>
          <div className='icon'>
            <img src={hand} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
