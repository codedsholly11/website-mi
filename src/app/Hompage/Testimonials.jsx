import React from 'react'
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div id='Testimonials'className='flex flex-col items-center justify-centre mt-[60px] pb-[20px] h-[100vh] gap-[30px]' >
        <h1 className='md:text-[40px] text-[20px] font-bold flex items-center'>------ Reviews ------</h1>
       <div className='flex flex-col md:flex-row gap-[50px] items-center justify-center'>
            <div className='border-[1px] border-blue-900 md:w-[40vw] w-[90vw] items-center md:px-[30px] md:py-[30px] h-[80vh] pt-[10px] gap-[10px] md:justify-center flex flex-col md:gap-[25px]'>
                <div className=''>
                <Image className='clip-circle' src={"/images/sholly.jpg"} alt="" width={80} height={80} />
                </div>
                <p className='text-gray-500 text-center md:w-[30vw] w-[80vw] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem repudiandae suscipit aliquid  </p>
                <h1 className='text-xl font-bold '>TOSH MONEY</h1>
                <h3 className='font-bold text-gray-500'>full-stack developer</h3>
            </div>
            <div className='border-[1px] border-blue-900 md:w-[40vw] w-[90vw] items-center md:px-[30px] md:py-[30px] h-[80vh] pt-[10px] gap-[10px] md:justify-center flex flex-col md:gap-[25px]'>
                <Image className='clip-circle' src={"/images/hero2.png"} alt="" width={100} height={100} />
                <p className='text-gray-500 text-center md:w-[30vw] w-[80vw] '>hlhdpsivhihzdghgjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh   ddddddddddddddddddddddddddddddddddd lgUGUGUGJJJJjjjjjjjjjjjjjjjjjgggggggggggggggggggglllllllllllllllllllllllll</p>
                <h1 className='text-xl font-bold '>TOSH MONEY</h1>
                <h3 className='font-bold text-gray-500'>full-stack developer</h3>
            </div>
       </div>
      
    </div>
  )
}

export default Testimonials
