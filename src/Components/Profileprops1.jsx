import React from 'react'
import Profile1 from './Profile1'
import Image from 'next/image'

const Profileprops1 = (props) => {
  return (
    <div className='flex flex-col items-center justify-center rounded-xl w-[350px] h-[40vh] border-2 bg-[#fcfafd] gap-[]'>
        <div className='grid  '>
            <Image className={props.Image} src={props.images} alt="images" width={200} height={200} />
            <h1 className='text-2xl font-semibold text-[#c91829] text-center'>{props.heading}</h1>
            <p className='text-center'>{props.paragraph}</p>
        </div>
      
    </div>
  )
}

export default Profileprops1

