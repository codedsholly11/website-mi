import React from 'react'
import Hero from './Hero'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Projects from './Projects'
import Testimonials from './Testimonials'
import { ThemeContext } from '../Context/ThemeContext'
// import { useContext } from '../Context/ThemeContext'


const Home = () => {
  // const {themecolor , tcolors} =useContext(ThemeContext)
  return (
    // <div style={{backgroundColor: themecolor, color: tcolors}}>
    <>
      <Hero/>
      <About/>
      <Service/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      
      </> 
      
      
    // </div>
  )
}

export default Home
