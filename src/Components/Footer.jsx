import React, { useState } from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    
  return (
    <div className='flex flex-col items-center justify-center w-[100%] bg-[#002f51] gap-[20px] py-[50px]'>
        <h1 className='text-[40px] font-bold text-gray-400'>CODEDSHOLLY</h1>
        <div className='text-3xl flex gap-[30px] text-gray-400'>
           <a href="https://www.linkedin.com/in/agboola-oluwashola-5a83a5323"><FaLinkedin /></a> 
            <RiFacebookCircleLine />
            <GrInstagram />
            <FaXTwitter />
        </div>
        <div>
            <p className='md:text-xl text-sm text-gray-400 text-center '>Codedsholly @ 2024 All Right Reserved, By Zealport Technologies Ltd </p>
        </div>
      
    </div>
  )
}

export default Footer
