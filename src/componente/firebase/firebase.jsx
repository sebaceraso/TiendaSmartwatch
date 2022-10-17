// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnQcC09f7yofp1bv4f0fkYPe8UXFfsEfw",
  authDomain: "tienda-smartwatch.firebaseapp.com",
  projectId: "tienda-smartwatch",
  storageBucket: "tienda-smartwatch.appspot.com",
  messagingSenderId: "68621537143",
  appId: "1:68621537143:web:5aea9ed06f186390601b72",
  measurementId: "G-LQ464TX2MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
 
  export {db};