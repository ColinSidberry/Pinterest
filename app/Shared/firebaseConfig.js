// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4F8vywjj_LDve0hHkim3N6ZIqBDkjWRQ",
    authDomain: "pinterest-fa522.firebaseapp.com",
    projectId: "pinterest-fa522",
    storageBucket: "pinterest-fa522.appspot.com",
    messagingSenderId: "111115581263",
    appId: "1:111115581263:web:b094e2dc348ae4423cb73a",
    measurementId: "G-81JBMZWDL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {app, auth, googleProvider};