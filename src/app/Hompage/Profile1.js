import React from 'react'
import Profileprops1 from './Profileprops1'
import Image from 'next/image'

const Profile1 = () => {
  return (

    <div className='flex flex-col w-full items-center justify-center py-[20px]  '>
      <h1 className='text-[30px] font-bold md:pb-7 text-[#f0394b]'>My Service</h1>
       <div className='grid md:grid-cols-3  gap-[20px] items-center justify-center'>
       <Profileprops1
        pix='/images/webdes.jpeg'
        heading='Web Design'
        paragraph='Creating clean, user-friendly web designs that combine aesthetics with functionality for an engaging digital presence.'
        />
      
      <Profileprops1
        pix='/images/webdevel.jpeg'
        heading='Web Development'
        paragraph='Crafting high-performance, visually stunning websites with modern technologies for an exceptional user experience..'
        />

      <Profileprops1
        pix='/images/Resdes.jpeg'
        heading='Responsive Design'
        paragraph='Designing fully responsive websites that adapt flawlessly to any device, delivering a seamless user experience across all screen sizes.'
        />

      <Profileprops1
        pix='/images/Creative.jpeg'
        heading='Creative Design'
        paragraph='Bringing ideas to life with innovative and creative web designs that captivate users and enhance brand identity in a very nice way'
        />

      <Profileprops1
        pix='/images/moapp.jpeg'
        heading='Mobile App Development '
        paragraph='Building intuitive, high-performance mobile apps that deliver seamless user experiences on both iOS and Android platforms'
        />

      <Profileprops1
        pix='/images/webment.jpeg'
        heading='Website-Maintenance '
        paragraph='Providing reliable website maintenance to ensure seamless performance, security, and updates for long-term success.'
        />
        
       </div>
    </div>
  )
}

export default Profile1

