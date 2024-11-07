import React from 'react'
import Profile1 from './Profile1'
import Image from 'next/image'

const Profileprops1 = (props) => {
  return (
    <div className='rounded-xl w-[350px] h-[vh] border-2  '>
        <div className='flex text-center items-center flex-col justify-center grid-row-3 py-[20px] gap-[20px]'>
            <Image className='rounded-xl' src={props.pix} alt="pix" width={150} height={100} />
            <h1 className='text-2xl font-semibold text-[#c91829]'>{props.heading}</h1>
            <p className='px-[5px] font-semibold text-lg'>{props.paragraph}</p>
        </div>
    </div>
  )
}

export default Profileprops1

