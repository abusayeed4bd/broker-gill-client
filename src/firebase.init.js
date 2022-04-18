// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTI7NtTCRbl6qhT9lgI-6CDW3_evM1DnU",
    authDomain: "react-broker-website.firebaseapp.com",
    projectId: "react-broker-website",
    storageBucket: "react-broker-website.appspot.com",
    messagingSenderId: "221589513376",
    appId: "1:221589513376:web:6ec8831d5dfc42e4aa15c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;