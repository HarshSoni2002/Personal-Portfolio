// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZnW3529uepu0hczEzRxgdzidmIH76ENc",
  authDomain: "harshsoni-portfolio.firebaseapp.com",
  projectId: "harshsoni-portfolio",
  storageBucket: "harshsoni-portfolio.appspot.com",
  messagingSenderId: "233301576011",
  appId: "1:233301576011:web:de51a44399e6e55ccec0ce",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
