import React from 'react'
import './style.css'
import pic1 from '../../assets/pic1.png'

const Footer = () => {
  return (
    <>
      <div className='footer--container'>
        <div className='footer--grid'>
          <div className='footer--item'>
            <div className='footer--title'>
              <h2> Have something in mind?</h2>
              <div className='details2'>
                <img src={pic1} /> <h2>let’s build it together.</h2>
              </div>
            </div>
            <p>Build with 💖 by Hendry</p>
          </div>

          <div className='footer--item--2'>
            <div className='footer--button'>
              <button>
                <span>Get in touch</span>
              </button>
            </div>
            <nav>
              <ul>
                <li>Linkedin</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Webflow</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
