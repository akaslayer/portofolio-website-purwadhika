import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import './style.css'
import { useStateValue } from '../StateContext'

const SideMenu = () => {
  const { sidebarOpen } = useStateValue()
  const { setSidebarOpen } = useStateValue()
  const handleButtonClick = () => {
    setSidebarOpen((prevState) => !prevState)
  }
  return (
    <div className={`menu-toogle-${sidebarOpen ? 'show' : ''}`}>
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
        <button onClick={handleButtonClick}>
          <span>
            <i className='ri-twitter-x-line'></i>
          </span>
        </button>
      </div>
    </div>
  )
}

export default SideMenu
