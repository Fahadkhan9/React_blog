import { initializeApp } from "firebase/app" ;
import { getFirestore } from 'firebase/firestore';   
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = { 
  apiKey : "AIzaSyCjmGeqyBkEYz9ayM5q93ZdyFgOoKItYg4" , 
  authDomain : "react-hooks-blog-6d3ce.firebaseapp.com" , 
  projectId : "react-hooks-blog-6d3ce" , 
  storageBucket : "react-hooks-blog-6d3ce.appspot.com" , 
  messagingSenderId : "385442931372" , 
  appId : "1:385442931372:web:c4a9da8afdbb9518ebf509" 
};

// Initialize Firebase
const app = initializeApp ( firebaseConfig );

export const db = getFirestore(app);
