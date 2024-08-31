"use client";
import React, { useState, useEffect } from 'react'
import Profile from './profile'

const Project = () => {

  return (
    <div id='project' >
        <h1 className=' flex justify-center text-3xl font-bold items-center py-[20px]'>My Projects</h1>
        <div>
           <Profile/>
        </div>
      
    </div>
  )
}

export default Project

