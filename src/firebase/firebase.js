// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC67wY1UL24yyrVONzsxvcLEzYeszvMVO0",
  authDomain: "summative-5c87d.firebaseapp.com",
  projectId: "summative-5c87d",
  storageBucket: "summative-5c87d.appspot.com",
  messagingSenderId: "19884712318",
  appId: "1:19884712318:web:6cc5774f9060bdbc3d932f",
  measurementId: "G-K2H0EZ4GQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);