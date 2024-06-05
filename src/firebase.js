// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLsZmwOfvmTtLEEyxn008yeZWHmuIvano",
  authDomain: "dating-app-aeb94.firebaseapp.com",
  projectId: "dating-app-aeb94",
  storageBucket: "dating-app-aeb94.appspot.com",
  messagingSenderId: "431131778847",
  appId: "1:431131778847:web:e129627c42bea2d9a81a2a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp);

export default database;