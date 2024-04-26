import React from 'react'
import arrow from '../../../assets/arrow.png'
import './style.css'

import { Link } from 'react-router-dom'

const Work = ({ title, text, link }) => {
  return (
    <>
      <div className='work--container'>
        <div className='work--item'>
          <div className='work--desc'>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
          <div className='work--button'>
            <Link to={link} target='_blank'>
              <button>
                <span>
                  <i className='ri-arrow-right-up-line'></i>
                </span>
              </button>
            </Link>
          </div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default Work
