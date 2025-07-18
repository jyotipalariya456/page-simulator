// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyC6rOC_HYWCLery6ZuWfTqxrCufu_GmahQ",
  authDomain: "proviser-b180a.firebaseapp.com",
  projectId: "proviser-b180a",
  storageBucket: "proviser-b180a.firebasestorage.app",
  messagingSenderId: "124574872020",
  appId: "1:124574872020:web:840fd8e14a108fe1566641",
  measurementId: "G-522KYG70NC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { analytics, db, auth };
