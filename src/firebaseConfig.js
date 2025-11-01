// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW_SLNS0Ep18ql_FfnOKGRS0uzPBnvU0g",
  authDomain: "coursebuilder-d4cf5.firebaseapp.com",
  projectId: "coursebuilder-d4cf5",
  storageBucket: "coursebuilder-d4cf5.firebasestorage.app",
  messagingSenderId: "83989107569",
  appId: "1:83989107569:web:8a009c4bfc816e9bbc1cd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
const auth = getAuth(app);

// firestore
const db = getFirestore(app);

export { app, auth, db }