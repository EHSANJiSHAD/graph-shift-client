// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8cNuuciOJaB9WD6z32o7ceFH5GcNQZ60",
  authDomain: "graph-shift.firebaseapp.com",
  projectId: "graph-shift",
  storageBucket: "graph-shift.appspot.com",
  messagingSenderId: "822745953783",
  appId: "1:822745953783:web:ec114f2759a6fcf6d36af2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;