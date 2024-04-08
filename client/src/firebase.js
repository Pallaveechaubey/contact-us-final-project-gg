// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import VITE_FIREBASE_API_KEY from './env';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "april-contact.firebaseapp.com",
  projectId: "april-contact",
  storageBucket: "april-contact.appspot.com",
  messagingSenderId: "740847141134",
  appId: "1:740847141134:web:1ff8c81d689578d8bc575f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);