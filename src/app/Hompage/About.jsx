"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-scroll'


const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div id='About' className='flex flex-col px-[50px] pb-[20px] items-center gap-[50px] '>
      <h1 className='md:text-[40px] text-[20px] font-bold '>ABOUT ME</h1>
      <div className='flex flex-col md:flex-row sm:items-center justify-center sm:justify-center gap-[50px]'>
        <div 
          data-aos="custom-slide-in" 
          className=''
        >
          <Image 
            className='rounded-full border-2 md:h-[400px] md:w-[400px] h-[300px] w-[300px]' 
            src="/images/shola.jpg" 
            alt="image" 
            width={500} 
            height={500} 
          />
        </div>
        <div className='aboutme md:w-[40vw] w-[90vw] m-[15px] bg-gray-800 text-white border-2 rounded-xl p-[40px] md:h-[50vh] h-[50vh] flex items-center '>
          <div className='font-mono flex flex-col md:gap-[20px] gap-[10px] font-xl items-center'>
            <p>"Hello, I'm CODEDSHOLLY, a web developer specializing in HTML, CSS, JavaScript, Reactjs, Nextjs, Firebase, and more.</p>  
            <p>I'm passionate about crafting exceptional digital experiences.</p>  
            <p>Let's collaborate and bring your digital vision to life!"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

