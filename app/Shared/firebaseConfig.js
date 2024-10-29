import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA4F8vywjj_LDve0hHkim3N6ZIqBDkjWRQ",
    authDomain: "pinterest-fa522.firebaseapp.com",
    projectId: "pinterest-fa522",
    storageBucket: "pinterest-fa522.appspot.com",
    messagingSenderId: "111115581263",
    appId: "1:111115581263:web:b094e2dc348ae4423cb73a",
    measurementId: "G-81JBMZWDL7"
};

const app = initializeApp(firebaseConfig);

export {app};