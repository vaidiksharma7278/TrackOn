import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
function Navbar() {
  // const auth=localStorage.setItem("user")


  return (
    <div>
       
        <ul className='nav-bar'>
            <li><Link to="/"><a className="flex items-center justify-center font-medium title-font md:justify-start">
          <img alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9MKzSrnO1APuAwJXTKcoBWbeoGKLU851ueg&usqp=CAU" className="object-contain w-12 h-6" />
          <h1 className="hidden ml-2 font-bold tracking-tight uppercase cursor-pointer  lg:block">
            <span className="text-3xl text-blue-500">Track</span>ON
          </h1>
        </a></Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/signup">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            
            </ul>
            </div>
  )
}

export default Navbar