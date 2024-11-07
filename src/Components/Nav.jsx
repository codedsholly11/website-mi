"use client"
import React, {useContext, useState} from 'react';
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { ThemeContext } from '@/app/Context/ThemeContext';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";



const Nav = () => {
  const [menu, setMenu] =useState(false)
  function handleMenu(){
    setMenu(!menu)
  }
  const  {changeBackground, setThemecolor, themecolor,} = useContext(ThemeContext)

  const smoothScroll = (targetY, duration) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    const scrollStep = (currentTime) => { 
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      window.scrollTo(0, startY + distance * progress);

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      smoothScroll(element.offsetTop, 1000);
 }
 };
  return (
    <div>
        <nav className='flex fixed w-[100%] items-center justify-between md:px-[50px] px-[15px] py-[15px] cursor-pointer text-gray-500 bg-[#fcfafd] z-10'>
            <div className='text-[30px] font-bold text-[#f0394b]'>
                <h1>CODEDSHOLLY</h1>
            </div>
            <ul className='md:flex gap-[40px] font-bold hidden'>
                <li className='hover:text-[#f0394b] cursor-pointer' onClick={() => scrollToSection("Hero")}>HOME</li>
                <li className='hover:text-[#f0394b] cursor-pointer' onClick={() => scrollToSection("About")}>ABOUT</li>
                <li className='hover:text-[#f0394b] cursor-pointer' onClick={() => scrollToSection("Service")} >SERVICE</li>
                <li className='hover:text-[#f0394b] cursor-pointer' onClick={() => scrollToSection("Work")}>WORK</li>
                <li className='hover:text-[#f0394b] cursor-pointer' onClick={() => scrollToSection("Testimonials")}>TESTIMONIALS</li>
                <li className='hover:text-[#f0394b] cursor-pointer' onClick={() => scrollToSection("Contact")}>CONTACT</li>
                <button className='text-[30px]' onClick={()=>{changeBackground("black", "white")}}>{themecolor === "white" ? <MdOutlineLightMode /> :<MdDarkMode />}</button>
            </ul>
            <button onClick={handleMenu} className='flex md:hidden text-5xl font-bold'>{menu ? <IoMdClose /> : <AiOutlineMenuUnfold />}</button>
        </nav>
        {menu&&
          <ul className={`flex fixed flex-col transition-all duration-1000 ease-linear items-center justify-center py-[5px] bg-blue-100 w-[100vw] px-[20px] z-10 text-xl font-bold overflow-hidden  gap-[20px]  ${menu?'top-14':'-top-full'}`}>
          <li className='hover:text-[#f0394b] cursor-pointer' onClick={() => scrollToSection("Hero")}>HOME</li>
          <li className='hover:text-[#f0394b] cursor-pointer' onClick={() => scrollToSection("About")}>ABOUT</li>
          <li className='hover:text-[#f0394b] cursor-pointer' onClick={() => scrollToSection("Service")} >SERVICE</li>
          <li className='hover:text-[#f0394b] cursor-pointer' onClick={() => scrollToSection("Work")}>WORK</li>
          <li className='hover:text-[#f0394b] cursor-pointer' onClick={() => scrollToSection("Testimonials")}>TESTIMONIALS</li>
          <li className='hover:text-[#f0394b] cursor-pointer' onClick={() => scrollToSection("Contact")}>CONTACT</li>
          <button className='text-[30px]' onClick={()=>{changeBackground("black", "white")}}>{themecolor === "white" ? <MdOutlineLightMode /> :<MdDarkMode />}</button>
        </ul>
        }
      
    </div>
  )
}

export default Nav
