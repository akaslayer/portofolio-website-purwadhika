import React from 'react'
import Hero from '../../components/Hero'
import Nav from '../../components/Nav'
import About from '../../components/About'
import './style.css'
import Works from '../../components/Works'
import Website from '../../components/Website'
import Testimonial from '../../components/Testimonials'
import Footer from '../../components/Footer'
import HambergerMenu from '../../components/HambergerMenu'
import SideMenu from '../../components/SideMenu'
import StateProvider from '../../components/StateContext'

const Home = () => {
  return (
    <>
      <StateProvider>
        <SideMenu />
        <HambergerMenu />
        <Nav />
        <Hero />
        <About />
        <Works />
        <Website />
        <Testimonial />
        <Footer />
      </StateProvider>
    </>
  )
}

export default Home
