// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// refs: docs firestore: https://firebase.google.com/docs/firestore/quickstart

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTZoRomlAfXT0TkpBwWNGTcv3xE4nroLs",
  authDomain: "chat-app-2b91e.firebaseapp.com",
  projectId: "chat-app-2b91e",
  storageBucket: "chat-app-2b91e.appspot.com",
  messagingSenderId: "702927870057",
  appId: "1:702927870057:web:7f8d185ed120062e7a6af8",
  measurementId: "G-519EY8YN2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const auth = getAuth()

const db = getFirestore(app);

export {analytics, provider, auth, db}