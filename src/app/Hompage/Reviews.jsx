"use client";
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Image from 'next/image';


const Reviews = () => {
  
    const page = [
        {
            image:"/images/fine.jpg",
            paragraph:"born to rule",
            name:"Tosh Money",
            header:"sholly"
        },
        {
            image:"/images/fine.jpg",
            paragraph:"born to rule",
            name:"Tosh Money",
            header:"sholly"
        },
        {
            image:"/images/fine.jpg",
            paragraph:"born to rule",
            name:"Tosh Money",
            header:"sholly"
        },
        {
            image:"/images/fine.jpg",
            paragraph:"born to rule",
            name:"Tosh Money",
            header:"sholly"
        },
    ]
    
     const item = page.map((i, index)=>(
        <div key={index} className='bg-red-500 w-[100%] '> 
            {/* <Image src={i.image} alt="" width={100} height={100} /> */}
            <p className='text-black text-[50px]'>{i.name}</p>
            <p>{i.paragraph}</p>
        </div>
     ))

     const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
  return (
    <div className='w-[100%] bg-red-600'>
       
         <AliceCarousel
        mouseTracking
        items={item}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
        infinite
        />
    </div>
  )
}

export default Reviews
