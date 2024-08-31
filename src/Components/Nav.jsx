import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav className='flex fixed w-[100%] items-center justify-between px-[50px] py-[15px] cursor-pointer text-gray-500 bg-[#fcfafd]'>
            <div className='text-3xl font-bold text-[#c91829]'>
                <h1>CODEDSHOLLY</h1>
            </div>
            <ul className='flex gap-[40px] font-bold '>
                <li ><a href="#"className='hover:border-b-2 border-red-400'>HOME</a></li>
                <li><a href="#" className='hover:border-b-2 border-red-400' >ABOUT</a></li>
                <li>SERVICE</li>
                <li>WORK</li>
                <li>BLOGS</li>
                <li>TESTIMONIALS</li>
                <li>CONTACT</li>
            </ul>
        </nav>
      
    </div>
  )
}

export default Nav
