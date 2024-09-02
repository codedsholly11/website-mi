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
    <div id='about' className='flex flex-col px-[50px] items-center justify-center gap-[50px] bg-black h-[100vh]'>
      <h1 className='text-2xl font-bold text-white'>ABOUT ME</h1>
      <div className='flex justify-center gap-[50px]'>
        <div 
          data-aos="custom-slide-in" 
          className='rounded-[100%] overflow-hidden h-[400px] w-[400px] border-[2px] border-[white]'
        >
          <Image 
            className='w-full h-full' 
            src="/coded.png" 
            alt="image" 
            width={500} 
            height={500} 
          />
        </div>
        <div className='aboutme w-[40vw]  bg-gray-800 text-white border-2 rounded-xl p-[40px] h-[50vh]'>
          <div className='font-mono flex flex-col gap-[20px] font-xl'>
            <p>"Hello, I'm CODEDSHOLLY, a web developer specializing in HTML, CSS, JavaScript, React, Firebase, and more.</p>  
            <p>I'm passionate about crafting exceptional digital experiences.</p>  
            <p>Let's collaborate and bring your digital vision to life!"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

