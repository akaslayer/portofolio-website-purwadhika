import React from 'react'
import Hero from '../../components/Hero'
import Nav from '../../components/Nav'
import About from '../../components/About'
import './style.css'
import Works from '../../components/Works'
import Website from '../../components/Website'
import Testimonial from '../../components/Testimonials'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Works />
      <Website />
      <Testimonial />
      <Footer />
    </>
  )
}

export default Home
