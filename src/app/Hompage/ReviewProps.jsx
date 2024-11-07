import React from 'react';
import Image from 'next/image';

const ReviewProps = (props) => {
  return (
    <div>
      <div className='border-[1px] border-blue-900 md:w-[40vw] w-[90vw] items-center md:px-[30px] md:py-[30px] h-[80vh] pt-[10px] gap-[5px] md:justify-center flex flex-col md:gap-[25px]'>
        <Image className='rounded-[50px] h-[100px] w-[100px]' src={props.pics} width={80} height={80}/>
        <p className='text-gray-500 text-center md:w-[30vw] w-[80vw] '>{props.paragraph}</p>
        <h1 className='text-xl font-bold '>{props.name}</h1>
        <h3 className='font-bold text-gray-500'>{props.position}</h3>
      </div>
    </div>
  )
}

export default ReviewProps
