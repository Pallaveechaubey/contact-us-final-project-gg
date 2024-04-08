// import React from 'react'

import { Link } from "react-router-dom";

export default function Home() {
  return (
<div className="h-screen flex justify-center items-center bg-gradient-to-br from-purple-500 to-indigo-600">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
        <h1 className="text-4xl font-bold mb-4 text-center animate-pulse text-purple-800">Welcome to Our Website</h1>
        <p className="text-lg mb-4 text-center  text-gray-800">We provide awesome services to our clients. Check them out!</p>
        <div className="flex justify-center">
          <Link to ='/profile'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
            Report Your Problem Here!
          </button>
          </Link>
        </div>
      </div>
    </div>
          
  )
}
