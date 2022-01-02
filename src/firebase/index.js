// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSj1vuS2SPrOibvUob-7beJG3zQpbaeUs",
  authDomain: "photo-gallery-react-fire-dfd12.firebaseapp.com",
  projectId: "photo-gallery-react-fire-dfd12",
  storageBucket: "photo-gallery-react-fire-dfd12.appspot.com",
  messagingSenderId: "1042440373534",
  appId: "1:1042440373534:web:aad4705bb29e7c8ec9b50f",
  measurementId: "G-V3GGBYWX9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);