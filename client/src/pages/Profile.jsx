// import React from 'react';
// import { useDispatch} from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';

// import './profile.css'; // Importing the CSS file
// import { FaHeart } from 'react-icons/fa'; // Importing the heart icon from react-icons
// import {  useState, useEffect } from 'react';
// import { useRef, useState, useEffect } from 'react';

// import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage';
// import {app} from '../firebase'
// import { signOut } from '../redux/user/userSlice';

// export default function Profile() {
//   const dispatch= useDispatch();
// handle signout
  // const handleSignOut = async ()=>{
  //   try{
  //       await fetch('/api/user/signout');
        
  //       dispatch(signOut())
  //   }catch(error){
  //         console.log(error)     
  //   }
  // }



  // const validateForm = (event) => {
  //   event.preventDefault();
  //   const name = event.target.elements.name.value.trim();
  //   const email = event.target.elements.email.value.trim();
  //   const message = event.target.elements.message.value.trim();

    // Validate name, email, and message fields
    // if (name === '' || email === '' || message === '') {
    //   alert('Please fill out all fields');
    //   return false;
    // }

    // Validate name: Only letters and spaces allowed
    // const namePattern = /^[a-zA-Z\s]+$/;
    // if (!name.match(namePattern)) {
    //   alert('Please enter a valid name (only letters and spaces)');
    //   return false;
    // }

    // Validate name: At least 4 characters and no symbols or numbers
    // if (name.length < 4 || !/^[a-zA-Z\s]*$/.test(name)) {
    //   alert('Please enter a valid name (at least 4 characters and no symbols or numbers)');
    //   return false;
    // }

    // Validate email: Simple email format check
    // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!email.match(emailPattern)) {
    //   alert('Please enter a valid email address');
    //   return false;
    // }

    // If all validations pass, show thank you message
  //   alert('Thank you for submitting the form!');
  //   return true;
  // };

//   return (
//     <div className='parallox'>
//     <div className="container">
//       <div className="left-section m-5">
//         <h2 className='text-cyan-100 font-semibold hover:decoration-4 mb-4'>We are happy to help you <FaHeart className="inline-block ml-2 text-red-500" /></h2>
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <img
//         src="https://img.freepik.com/free-vector/taking-notes-concept-illustration_114360-2275.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706918400&semt=ais"
//         alt="Welcome Image"
//         style={{ maxWidth: '100%' }}
//       />
//     </div>
//       </div>
//       <div className="right-section">
//         <h2 >Contact Us</h2>
//         <form id="contactForm" onSubmit={validateForm} encType="multipart/form-data">
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input type="text" id="name" name="name" required pattern="[a-zA-Z\s]+" title="Please enter only letters and spaces" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" name="email" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">How can we help you?</label>
//             <textarea id="message" name="message" rows="5" required></textarea>
//           </div>
//           <div className="form-group">
//             <label htmlFor="emailType">Select Email Type</label>
//             <select id="emailType" name="emailType">
//               <option value="pallaveechaubey831@gmail.com">Support</option>
//               <option value="pallavee.x.chaubeyfosteringlinux.com">Sales</option>
//               <option value="info@example.com">General Inquiry</option>
//             </select>
//           </div>
//           <button className="bg-blue-400 p-4" type="submit">Send Message</button>
//         </form>
//       </div>
//     </div>

//     <button onClick={handleSignOut} className='text-red-700 cursor-pointer p-8 decoration-8 tracking-wide	'>
//           Sign out
//         </button>

    
//       </div>
//   );
// }


// ===================================================================================

import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaHeart } from 'react-icons/fa';
import './profile.css';
import { signOut } from '../redux/user/userSlice';

export default function Profile() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    emailType: 'pallaveechaubey831@gmail.com' // Default email type
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, message, emailType } = formData;

    // Basic form validation
    if (!name.match(/^[a-zA-Z\s]+$/)) {
      alert('Name should contain alphabets only.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Invalid email format.');
      return;
    }
    if (!message.trim()) {
      alert('Message cannot be empty.');
      return;
    }

    // Send data to backend
    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message, emailType })
      });
      if (response.ok) {
        // Success message or redirection
        alert('Message sent successfully!');
        // Optionally, clear form fields
        setFormData({ name: '', email: '', message: '', emailType: '' });
      } else {
        // Handle error response
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch('/api/user/signout');
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='parallox h-screen my-auto' >
      <div className="container">
        <div className="left-section m-5">
          <h2 className='text-cyan-100 font-semibold hover:decoration-4 mb-4'>We are happy to help you <FaHeart className="inline-block ml-2 text-red-500" /></h2>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="https://img.freepik.com/free-vector/taking-notes-concept-illustration_114360-2275.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706918400&semt=ais"
              alt="Welcome Image"
              style={{ maxWidth: '100%' }}
            />
          </div>
        </div>
        <div className="right-section">
          <h2>Contact Us</h2>
          <form id="contactForm" onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required pattern="[a-zA-Z\s]+" title="Please enter only letters and spaces" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">How can we help you?</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="emailType">Select Email Type</label>
              <select id="emailType" name="emailType" value={formData.emailType} onChange={handleChange}>
                <option value="pallaveechaubey831@gmail.com">Support</option>
                <option value="pallavee.x.chaubeyfosteringlinux.com">Sales</option>
                <option value="info@example.com">General Inquiry</option>
              </select>
            </div>
            <button className="bg-blue-400 p-4" type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <button onClick={handleSignOut} className='text-red-700 cursor-pointer p-8 decoration-8 tracking-wide	'>
        Sign out
      </button>
    </div>
  );
}

