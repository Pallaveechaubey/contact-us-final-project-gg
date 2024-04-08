// import React from 'react'

import { Link } from "react-router-dom";

export default function About() {
  return (
      <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>
        <div className="max-w-lg p-6 bg-white rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Welcome to Our Website</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our website is designed to help individuals who are facing any kind of issue and need assistance. If you have encountered a problem and need help, you can visit our Report Here page and provide details such as your name, email address, and a description of your problem in the message box. You can also select the email address to whom you want to send the report.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our team is dedicated to providing prompt assistance and resolving issues effectively. We believe in making technology accessible to everyone and ensuring a smooth experience for our users.
          </p>
          <Link to="/profile" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 inline-block">
            Report Here
          </Link>
        </div>
      </div>
      <div className="parallax bg-gradient-to-b from-purple-500 to-indigo-600 min-h-screen flex justify-center items-center">
        <div className="text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Get Help Today!</h2>
          <p className="text-lg mb-6">Dont hesitate to reach out to us. Were here to assist you.</p>
          <Link to="/profile" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 inline-block">
            Report Now
          </Link>
        </div>
      </div>
    </div>
     
   )
}
