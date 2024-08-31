import React, { useState } from 'react'
import Profileprops from './Profileprops'

const Profile = () => {
    const [project, setProject] = useState(false)
    function handleProject(){
        setProject(!project)
    }
  return (
    <div className='flex flex-col gap-[30px]'>
      <Profileprops
        heading='IB Trading Academy'
        paragraph = "This is a live website. a project i collaborated in with other web-developers at Toshconsult Technologies inc."
        link="https://ib-academy.ng"
        button={
              <button onClick={handleProject}>
               {project ? "Hide Project" : "Show Project"}
             </button>
           }
       
        />
      <Profileprops
        heading='fancyPix'
        paragraph = "This is a fantastic product i built on my own. it is your go to place for premium images that beautify and elevate your projects"
        link="https://unsplash-rose.vercel.app/"
        button ={
            <button onClick={handleProject}>
             {project ? "Hide Project" : "Show Project"}
           </button>
         }
        
      />
     
    </div>
  )
}

export default Profile
