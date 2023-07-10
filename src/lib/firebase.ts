// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5mvbAc5ni_1EcBvDEZWj5Y4ebfJv3t5I",
  authDomain: "add-note-cb194.firebaseapp.com",
  projectId: "add-note-cb194",
  storageBucket: "add-note-cb194.appspot.com",
  messagingSenderId: "141536297186",
  appId: "1:141536297186:web:e0a425f7c485d2b0e45ebb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);