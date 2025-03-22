
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-7ktCN6y_3P1RX2WvKcGImh-7aO_M25k",
  authDomain: "projeto-aula-f6ea0.firebaseapp.com",
  projectId: "projeto-aula-f6ea0",
  storageBucket: "projeto-aula-f6ea0.firebasestorage.app",
  messagingSenderId: "473236541273",
  appId: "1:473236541273:web:1a4a7e74b467a5aab98648",
  measurementId: "G-PEWS6FJ6D9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {app, auth, db};