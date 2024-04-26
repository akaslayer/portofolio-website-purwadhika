import React from 'react'
import Work from './Work'
import './style.css'

const Works = () => {
  return (
    <div className='grid--col--work' id='work'>
      <div className='grid--item'>
        <h3>Recent Work</h3>
      </div>
      <div className='grid--item'>
        <Work
          text='Brand Design - Webflow Development - Web Design'
          title='Decodable.co'
          link='https://www.decodable.co/'
        />
        <Work
          title='Gofirefly.io'
          text='Brand Design - Webflow Development - Web Design'
          link='https://www.firefly.ai/'
        />
        <Work
          title='Blinkops.com'
          text='Brand Design - Webflow Development - Web Design'
          link='https://www.blinkops.com/'
        />
        <Work
          title='Withkanvas.com'
          text='Brand Design - Webflow Development - Web Design'
          link='https://www.withkanvas.com/'
        />
      </div>
    </div>
  )
}

export default Works
