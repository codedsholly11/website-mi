    "use client"
import React, { useContext } from 'react'
import Footer from '../Components/Footer'
import Home from '../app/Hompage/Home'
import Nav from '../Components/Nav'
import { ThemeContext, ThemeContextprovider } from './Context/ThemeContext'

const page = () => {
  
  return (
    <ThemeContextprovider>
        <Wrapper/>
    </ThemeContextprovider>
  )
}  
const Wrapper=()=>{
  const {themecolor,textcolor}=useContext(ThemeContext)
 return(
 <div style={{background:themecolor, color: textcolor}}>
  <Nav/>
      <Home/>
      <Footer/>
  </div> 
 )
 
}     

export default page
