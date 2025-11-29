// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEbKQzA9vrP65gUB2ikS7zmCL7V0-DyAA",
  authDomain: "blogify-1ad5b.firebaseapp.com",
  projectId: "blogify-1ad5b",
  storageBucket: "blogify-1ad5b.firebasestorage.app",
  messagingSenderId: "1043968168190",
  appId: "1:1043968168190:web:0f576d7988fe7e4680d5af",
  measurementId: "G-BBGQY2GE9V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
