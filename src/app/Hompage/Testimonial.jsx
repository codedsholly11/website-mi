import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AutoPlayStrategy } from 'react-alice-carousel';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // AutoPlay: true ,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='md:w-1/4 w-3/4  m-auto bg-green-700'>
      <div className='mt-[20px]'>
      <Slider {...settings}>
        {data.map((d)=>(
          <div className='bg-[#f4f1f8] text-black rounded-xl h-[65vh] md:h-[80vh]'>
            <div className='md:h-56 h-[25vh] rounded-t-xl bg-[#f4f1f8] flex justify-center items-center'>
              <Image className='rounded-[75px] h-[150px] w-[150px]' src={d.pics} alt='' width={100} height={100}/>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 p-4'>
              <p className='text-gray-500 text-center px-[30px] '>{d.paragraph}</p>
              <p className='text-xl font-bold '>{d.name}</p>
              <p className='font-bold text-gray-500'>{d.position}</p>
            </div>
          </div>
        ))}
        </Slider>

      </div>
      
    </div>
  )
}

const data = [
  {
    pics:'/images/boss.jpg',
    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem repudiandae suscipit aliquid love',
    name:'TOSH MONEY',
    position:' FULL-STACK DEVELOPER'
  },
  {
    pics:'/images/sholly.jpg',
    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem repudiandae suscipit aliquid love',
    name:'TOSH MONEY',
    position:' FULL-STACK DEVELOPER'
  },
  {
    pics:'/images/shola.jpg',
    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem repudiandae suscipit aliquid love',
    name:'TOSH MONEY',
    position:' FULL-STACK DEVELOPER'
  },
  {
    pics:'/images/shola.jpg',
    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem repudiandae suscipit aliquid love',
    name:'TOSH MONEY',
    position:' FULL-STACK DEVELOPER'
  },
  {
    pics:'/images/shola.jpg',
    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem repudiandae suscipit aliquid love',
    name:'TOSH MONEY',
    position:' FULL-STACK DEVELOPER'
  },
  {
    pics:'/images/shola.jpg',
    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem repudiandae suscipit aliquid love',
    name:'TOSH MONEY',
    position:' FULL-STACK DEVELOPER'
  },
  {
    pics:'/images/shola.jpg',
    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem repudiandae suscipit aliquid love',
    name:'TOSH MONEY',
    position:' FULL-STACK DEVELOPER'
  },
  {
    pics:'/images/shola.jpg',
    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem repudiandae suscipit aliquid love',
    name:'TOSH MONEY',
    position:' FULL-STACK DEVELOPER'
  },

]

export default Testimonial
