import React from 'react'
import logo from "/vite.svg"
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav className='flex justify-between bg-[#222222] px-5 items-center'>

        <img src={logo} alt="" />

        <div className=' inline-flex py-8 gap-5 text-[rgba(255,255,255,0.5)]'>
        <NavLink  className='active:text-white'  to="/"> Home</NavLink> 
        <NavLink to='/Backend'> Backend</NavLink> 
        <NavLink to='/Frontend'> Frontend</NavLink> 
        <NavLink to='/Contact'> Contact</NavLink> 
        </div>

    </nav>
  )
}

export default Navbar