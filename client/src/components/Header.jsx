// import React from 'react'

import { Link } from "react-router-dom";


export default function Header() {

  return (
  <div className="bg-purple-300">
    <div className="flex justify-between items-center max-w-6xl mx-auto p-5">
        <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white" >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Keen&Able</span>
            
        </Link>

        <ul className="flex gap-4">
            <Link to='/'>
            <li>Home</li>
            </Link>

            <Link to='/about'>
            <li>About</li>
            </Link>

            <Link to='/contact'>
            <li>Contact Us</li>
            </Link>
            
            <Link to='/sign-in'>
            <li>Sign In</li>
            </Link>
            
        </ul>
    </div>
  </div>
  )
}