import React from 'react'
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div id='Testimonials'className='flex flex-col items-center justify-centre md:mt-[60px]  pb-[20px]  gap-[30px]' >
        <h1 className='md:text-[40px] text-[40px] font-bold flex items-center text-[#f0394b]'>-----Reviews----- </h1>
       <div className='flex flex-col md:flex-row gap-[50px] items-center  justify-center p-[20px]'>
            <div className='shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  md:w-[40vw] w-[90vw] items-center md:px-[20px]  md:py-[20px] pt-[10px] gap-[5px] md:justify-center flex flex-col md:gap-[25px] rounded-lg bg-[f2f8fc] '>
                <Image className='rounded-[50px] h-[100px] w-[100px]' src={"/images/tosh.jpg"} alt="" width={80} height={80} />
                <p className='text-gray-500 text-center  px-[30px] '> I highly recommend CODEDSHOLLY. His exceptional front-end skills create visually stunning and user-friendly interfaces. He consistently deliver high-quality, maintainable code and excel in collaborations, making him an invaluable asset to any team </p>
                <h1 className='text-xl font-bold '>TOSH MONEY</h1>
                <h3 className='font-bold text-gray-500'>full-stack developer</h3>
            </div>
            <div className='shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] border-blue-900 md:w-[40vw] w-[90vw] items-center md:px-[20px] md:py-[20px]  pt-[10px] gap-[7px] md:justify-center flex flex-col md:gap-[25px] rounded-lg'>
                <Image className='rounded-[50px] h-[100px] w-[100px]' src={"/images/victor.jpg"} alt="" width={80} height={80} />
                <p className='text-gray-500 text-center px-[30px] '>As a product manager, working with @CODEDSHOLLY has been a pleasure. his attention to detail is truly remarkable. he consistently deliver clean, well-structured code, ensure seamless responsiveness across all devices.</p>
                <h1 className='text-xl font-bold '>VICTOR SMITH</h1>
                <h3 className='font-bold text-gray-500'>product manager</h3>
            </div>
       </div>
      
    </div>
  )
}

export default Testimonials
