"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsTelephoneInbound } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";


const Contact = () => {

    const [name, setName]= useState()
    const [email, setEmail]= useState()
    const [message, setMessage]= useState()
    
        async function fetchApi(e){
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
                    toast.success ('Message sent!!!')

                }
            } catch (error) {
                toast.error("unable to send, please check your internet connection")
                console.log(error);
            }
        }
            
        
  return (
    <div id='contact' className='flex items-center justify-center gap-[200px] py-[40px] w-[100%]'>
        <form onSubmit={fetchApi} >
            <div className='flex flex-col gap-[10px] mb-[10px]'>
                <h1 className='text-3xl font-semibold'>Contact Me</h1>
                <p>I am available for work, wether  remotely or.............................</p>
            </div>
            <div className='flex flex-col gap-[20px] '>
                <div>
                    <h1 className='text-xl font-bold text-gray-800'>Names</h1>
                    <input onChange={(e)=>setName(e.target.value)} name='name' value={name} required  className='w-[35vw] h-[7vh] bg-[gainsboro] px-[20px] rounded-xl' type="text" placeholder='Full Name'/>
                </div>
                <div>
                    <h1 className='text-xl font-bold text-gray-800'>Email</h1>
                    <input onChange={(e)=>setEmail(e.target.value)} name='email' value={email} required  className=' w-[35vw] h-[7vh] rounded-xl px-[20px] bg-[gainsboro]' type="text" placeholder='Email Address'/>
                </div>
                <div>
                    <h1 className='text-xl font-bold text-gray-800'>Message</h1>
                    <textarea onChange={(e)=>setMessage(e.target.value)} name='message' value={message} required className='border-[#fecaca] outline-none w-[35vw] h-[30vh] rounded-xl px-[20px] bg-[gainsboro]'placeholder='How can i be of help ? '></textarea>
                </div>
                <div>
                    <button className='w-[35vw] h-[7vh] bg-[#fecaca] rounded-xl font-bold'>SEND</button>
                </div>
                
            </div>
            <ToastContainer/> 
        </form>
        <div className='bg-black text-white w-[43vw] h-[60vh] flex flex-col items-start justify-center gap-[40px] px-[25px]'>
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
                    <p>No. 25, Jalan Merdeka, Taman Jaya, 58000 Kuala Lumpur, Malaysia.</p>
                </div>
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
        