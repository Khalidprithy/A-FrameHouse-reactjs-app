// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2ubhSlkupKM9Dk0zQWJij3Rmdnb_x3CI",
    authDomain: "a-frame-house.firebaseapp.com",
    projectId: "a-frame-house",
    storageBucket: "a-frame-house.appspot.com",
    messagingSenderId: "76396956371",
    appId: "1:76396956371:web:ffd53d3a65c5db17972226"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;