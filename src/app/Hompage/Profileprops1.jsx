import React from 'react'
import Profile1 from './Profile1'
import Image from 'next/image'

const Profileprops1 = (props) => {
  return (
    <div className='flex-col items-center justify-center rounded-xl w-[350px] h-[40vh] border-2 bg-[#fcfafd] '>
        <div className='flex items-center flex-col justify-center grid-row-3 py-[20px]'>
            <Image className='rounded-xl' src={props.pix} alt="pix" width={150} height={100} />
            <h1 className='text-2xl font-semibold text-[#c91829] text-center'>{props.heading}</h1>
            <p className='text-center'>{props.paragraph}</p>
        </div>
      
    </div>
  )
}

export default Profileprops1

