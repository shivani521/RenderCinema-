// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBnZsdsGNFrKbI7Mok88R4CvGt8GAxJvzA",
  authDomain: "netflix-clone-61a5e.firebaseapp.com",
  projectId: "netflix-clone-61a5e",
  storageBucket: "netflix-clone-61a5e.appspot.com",
  messagingSenderId: "210477929094",
  appId: "1:210477929094:web:b65450ae4ebf50b51b7707",
  measurementId: "G-QTQN1EZCMK"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)