import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react'

import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4NfVMV4ogRBfM9Qwux3yhCC4T4N-ysag",
  authDomain: "lunamodas33-81971.firebaseapp.com",
  projectId: "lunamodas33-81971",
  storageBucket: "lunamodas33-81971.appspot.com",
  messagingSenderId: "452544946404",
  appId: "1:452544946404:web:c1a66b7f0d8b882adcccf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
    </ChakraProvider>
)
