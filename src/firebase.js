// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0haJ0hx6M-fLUOUmZ5z5I0vHvhjBk4WI",
  authDomain: "codehaven-d3542.firebaseapp.com",
  projectId: "codehaven-d3542",
  storageBucket: "codehaven-d3542.appspot.com",
  messagingSenderId: "704581992030",
  appId: "1:704581992030:web:474edfb4947717920e7ecf"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;