"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsTelephoneInbound } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";


const Contact = () => {

    const [name, setName]= useState()
    const [email, setEmail]= useState()
    const [message, setMessage]= useState()
    const [sending, setSending] = useState(false)
    
        async function fetchApi(e){
            setSending(true)
            e.preventDefault()
            try {
                const baseurl='https://forms-io.onrender.com/submit-form/b1b149d9-2898-4188-8230-f163f7f90c62'
                const response= await fetch (baseurl,{
                    method:'POST',
                    headers:{'Content-type' : 'application/json'},
                    body:JSON.stringify({name, email, message})
                })
                .then((res)=>(res.json))
                if (response){
                    setSending(false)
                    toast.success ('Message sent!!!')

                }
            } catch (error) {
                toast.error("unable to send, please check your internet connection")
                console.log(error);
            }
        }
            
        
  return (
    <div id='Contact' className='flex flex-col md:flex-row items-center justify-center md:gap-[50px] gap-[80px] px-[30px] w-[100%] h-full'>
        <form onSubmit={fetchApi} className=''>
            <div className='flex flex-col gap-[10px] md:items-start items-center'>
                <h1 className='text-[40px] font-bold '>Contact Me</h1>
                <p className='flex md:text-start text-center w-[90vw]'>I am available for work, wether  remotely or.............................</p>
            </div>
            <div className='flex flex-col gap-[20px] items-center md:items-start '>
                <div>
                    <h1 className='text-xl font-bold text-gray-800'>Names</h1>
                    <input onChange={(e)=>setName(e.target.value)} name='name' value={name} required  className='md:w-[35vw] w-[90vw] h-[7vh] bg-[gainsboro] px-[20px] rounded-xl' type="text" placeholder='Full Name'/>
                </div>
                <div>
                    <h1 className='text-xl font-bold text-gray-800'>Email</h1>
                    <input onChange={(e)=>setEmail(e.target.value)} name='email' value={email} required  className=' md:w-[35vw] w-[90vw] h-[7vh] rounded-xl px-[20px] bg-[gainsboro]' type="text" placeholder='Email Address'/>
                </div>
                <div>
                    <h1 className='text-xl font-bold text-gray-800 '>Message</h1>
                    <textarea onChange={(e)=>setMessage(e.target.value)} name='message' value={message} required className='border-[#fecaca] outline-none md:w-[35vw] w-[90vw] h-[30vh] rounded-xl p-[20px] bg-[gainsboro]'placeholder='How can i be of help ? '></textarea>
                </div>
                <div>
                    <button className='w-[35vw] h-[7vh] bg-[#fecaca] rounded-xl font-bold'>{sending ? "Sending" : "Send"}</button>
                </div>
                
            </div>
            <ToastContainer/> 
        </form>
        <div>
            <div className='flex md:items-center'>
                <div className='bg-[#fecaca] w-[40%] py-10 px-8'></div>
                {/* <div className='bg-white py-6 w-[60%] px-8'></div> */}
            </div>
        <div className='bg-black text-white md:w-[60vw] w-[90vw] h-[75vh] flex flex-col md:items-start items-start justify-center gap-[40px] px-[25px]'>
                <h1 className='text-3xl'>Info</h1>
            <div className='flex flex-col gap-[35px] cursor-pointer'>
                <div className='flex gap-[20px]'>
                    <div className='text-4xl'><BsTelephoneInbound /></div>
                    <p>+234-7030512152</p>
                </div>
                <div className='flex gap-[20px]'>
                    <div className='text-4xl'><IoMailOutline /></div>
                    <p>codedsholly@gmail.com</p>
                </div>
                <div className='flex gap-[20px]'>
                   <div className='text-4xl'><FaRegAddressCard /></div>
                    <p className='w-[70%]'>No. 25, Jalan Merdeka, Taman Jaya, 58000 Kuala Lumpur, Malaysia.</p>
                </div>
            </div>
        </div>
        <div className='flex items-center'>
                <div className='bg-[#fecaca] w-[40%] py-6 px-8'>
                <div className='text-5xl flex gap-[30px] text-black'>
                    {/* <FaLinkedin />
                    <RiFacebookCircleLine />
                    <GrInstagram />
                    <FaXTwitter /> */}
                </div>
                </div>
                {/* <div className='bg-white w-[60%] py-6 px-8'></div> */}
            </div>
        </div>
    </div>


    
  )
}

export default Contact

        {/* <form onSubmit={fetchApi} className='flex px-[50px] py-[30px] flex-col items-center justify-center gap-[30px]'>
            <h1 className='text-3xl font-bold'>Contact Me</h1>
            <div className='flex gap-[30px] '>
                <div>
                    <h1 className='text-xl font-bold text-gray-500'>Names</h1>
                    <input onChange={(e)=>setName(e.target.value)} name='name' value={name} required  className='border-2 w-[40vw] h-[10vh] rounded-full px-[20px] bg-[#fbd4f2]' type="text" placeholder='Full Name'/>
                </div>
                <div>
                    <h1 className='text-xl font-bold text-gray-500'>Email</h1>
                    <input onChange={(e)=>setEmail(e.target.value)} name='email' value={email} required  className='border-2 w-[43vw] h-[10vh] rounded-full px-[20px] bg-[#5a9bb9]' type="text" placeholder='Email Address'/>
                </div>
            </div>
           <div>
                <div>
                    <h1 className='text-xl font-bold text-gray-500'>Message</h1>
                    <textarea onChange={(e)=>setMessage(e.target.value)} name='message' value={message} required className='border-none w-[85vw] h-[60vh] rounded-3xl px-[20px] bg-[gainsboro]'placeholder='How can i be of help ? ' name="" id=""></textarea>
                </div> 
           </div>
           <div>
                <button className='px-[40px] border-2 rounded-full bg-gray-400 py-[5px] font-bold'>Submit</button>
            </div>
                <ToastContainer/>
        </form> */}
        