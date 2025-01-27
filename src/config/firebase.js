import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBPDFLWaEsmRnqCPBwbMCTfXajfom4XjnI",
  authDomain: "circuito-x-927c3.firebaseapp.com",
  projectId: "circuito-x-927c3",
  storageBucket: "circuito-x-927c3.firebasestorage.app",
  messagingSenderId: "139728079788",
  appId: "1:139728079788:web:1a9e9b95164f8dd0c38809"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
