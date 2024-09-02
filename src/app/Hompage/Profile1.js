import React from 'react'
import Profileprops1 from './Profileprops1'
import Image from 'next/image'

const Profile1 = () => {
  return (

    <div className='flex flex-col w-[100%] items-center justify-center py-[20px] bg-black '>
      <h1 className='text-5xl font-bold py-[20px] text-white'>my service</h1>
       <div className='grid grid-cols-3 w-[90%] gap-[30px] items-center justify-center'>
       <Profileprops1
        pix='/images/webdes.jpeg'
        heading='Web Design'
        paragraph='Lorem Ipsum is simply dummy text of the Lorem has been the industry s standard dummy text ever.'
        />
      
      <Profileprops1
        pix='/images/webdevel.jpeg'
        heading='Web Development'
        paragraph='Lorem Ipsum is simply dummy text of the Lorem has been the industry s standard dummy text ever.'
        />

      <Profileprops1
        pix='/images/Resdes.jpeg'
        heading='Responsive Design'
        paragraph='Lorem Ipsum is simply dummy text of the Lorem has been the industry s standard dummy text ever.'
        />

      <Profileprops1
        pix='/images/Creative.jpeg'
        heading='Creative Design'
        paragraph='Lorem Ipsum is simply dummy text of the Lorem has been the industry s standard dummy text ever.'
        />

      <Profileprops1
        pix='/images/moapp.jpeg'
        heading='Mobile App Development '
        paragraph='Lorem Ipsum is simply dummy text of the Lorem has been the industry s standard dummy text ever.'
        />

      <Profileprops1
        pix='/images/webment.jpeg'
        heading='Website-Maintenance '
        paragraph='Lorem Ipsum is simply dummy text of the Lorem has been the industry s standard dummy text ever.'
        />
        
       </div>
    </div>
  )
}

export default Profile1

