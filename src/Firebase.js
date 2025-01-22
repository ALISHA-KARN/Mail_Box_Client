// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANANg8250j0Ly4_qeh3kpSdiM4HAU2_tk",
  authDomain: "mail-box-client-3fe91.firebaseapp.com",
  projectId: "mail-box-client-3fe91",
  storageBucket: "mail-box-client-3fe91.firebasestorage.app",
  messagingSenderId: "428157873473",
  appId: "1:428157873473:web:b16ddab9f51c1d2f5d05c0",
  measurementId: "G-4G9933BHD2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
