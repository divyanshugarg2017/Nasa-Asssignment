import React from 'react'
import nasa from "../../assets/NASA_logo.svg.png"
import { useState,useEffect } from 'react'
import axios from 'axios'

function Navbar() {
  const [picture,setPicture] = useState()


const getPicOfTheDay = async() => {
  const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7")
  setPicture(response?.data.url)
  console.log(response)
}


  useEffect(() => {
    getPicOfTheDay()
  }, [])
  return (
    <div className="navbar bg-[#000000] px-10">
      <div className="navbar-start">
        <div><img className=' h-20' src={nasa} alt="nasa" /></div>
      </div>
      <div className="navbar-end">
        <img className='h-20 w-20 object-cover rounded-full' src={picture} alt="pic of the day" />
      </div>
    </div>
  )
}

export default Navbar