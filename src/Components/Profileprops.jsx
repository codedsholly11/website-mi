"use client"
import React, { useState } from 'react'
import Profile from "./Profile"

const Profileprops = (props) => {
    const [project, setProject] = useState(false)
    function handleProject(){
        setProject(!project)
    }
  return (
   <div className='px-[80px]'>
       <div className='w-[60%] border-2 border-purple-500 rounded xl flex flex-col gap-[10px] px-[20px]'>
        <div className='flex items-end justify-between mt-[20px]'>
            <h1 className='text-2xl font-bold'>{props.heading}</h1>
            <button className='border-2  rounded-full px-[15px] w-[10vw] py-[5px]' onClick={handleProject}>{props.button}</button>
        </div>
      
      <p>{props.paragraph}</p>
      
      {
        project && 
        <div>
            <iframe className='w-[100%] h-[100vh]' src={props.link}></iframe>

        </div>
      }
    </div>
   </div>
  )
}

export default Profileprops 
