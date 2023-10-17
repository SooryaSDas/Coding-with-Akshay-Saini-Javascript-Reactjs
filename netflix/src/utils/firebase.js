// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsKHPXij1s-GfyDwaXdTfqIo_-qyALm5o",
  authDomain: "netflixgpt-8c72f.firebaseapp.com",
  projectId: "netflixgpt-8c72f",
  storageBucket: "netflixgpt-8c72f.appspot.com",
  messagingSenderId: "781850037886",
  appId: "1:781850037886:web:350314c5ec78479b41522f",
  measurementId: "G-WE1JBX0D04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();