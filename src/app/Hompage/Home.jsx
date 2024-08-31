import React from 'react'
import About from './About'
import Hero from './Hero'
import Contact from './Contact'
import Service from './Service'
// import Project from './Project'

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        {/* <Project/> */}
        <Service/>
        <Contact/>
      
    </div>
  )
}

export default Home
