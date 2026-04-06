// Firebase Configuration
// Replace these values with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2xtZZ9viQOxjmnYpzQhtjYne5l82FM3Y",
  authDomain: "bluedreamitaly.firebaseapp.com",
  projectId: "bluedreamitaly",
  storageBucket: "bluedreamitaly.firebasestorage.app",
  messagingSenderId: "145879085917",
  appId: "1:145879085917:web:938008da8d22839f7c6eb4",
  measurementId: "G-NX6V7GXSS1"
};

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
