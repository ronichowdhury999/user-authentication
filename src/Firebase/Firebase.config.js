// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWTa3iiN10CjudwsQXGveVbSqb5zWs4RM",
    authDomain: "user-authentication-d44ae.firebaseapp.com",
    projectId: "user-authentication-d44ae",
    storageBucket: "user-authentication-d44ae.appspot.com",
    messagingSenderId: "310254759600",
    appId: "1:310254759600:web:14ffdd6c1444baf2f65575"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
