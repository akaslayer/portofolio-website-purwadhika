import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const WebsiteList = ({ image, link }) => {
  return (
    <div className='container--website'>
      <img src={image} alt='' />
      <div className='container--website-button'>
        <Link to={link}>
          <button>
            <span>
              Visit the website <i class='ri-arrow-right-up-line'></i>
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default WebsiteList
