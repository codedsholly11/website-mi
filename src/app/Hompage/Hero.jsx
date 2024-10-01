"use client"
import React from 'react'
import Image from 'next/image'
import Typewriter from 'react-typewriter-effect';



const Hero = () => {
  return (
    <div id='Hero' className='background'>
    <div className="absolute md:top-1/2 top-[50%] md:justify-normal justify-center flex md:items-start items-center  md:left-20 bg-[rgba(0,0,0,0.534)]  border-4 border-[#25262c] md:font-semibold text-[1px] h-[50vh] md:w-[40vw] w-[100vw] transform -translate-y-1/2 p-4 rounded-lg shadow-lg">
      <Typewriter
        textStyle={{ fontFamily: 'Arial', fontSize: '40px', color: '#ffff' }}
        cursorColor="#3F3D56"
        text="Web Developer on an epic journey to conquer the digital universe </>"
        typeSpeed={50}
        deleteSpeed={50}
        loop={true} // Loops the typing effect
      />
    </div>

      
    </div>
  )
}

export default Hero
