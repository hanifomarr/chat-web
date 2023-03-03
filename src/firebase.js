import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCT1nHN4OjYsLrb2YPdyvxUaAtahaDHXMM",
    authDomain: "deer-app-ebbad.firebaseapp.com",
    projectId: "deer-app-ebbad",
    storageBucket: "deer-app-ebbad.appspot.com",
    messagingSenderId: "254461814423",
    appId: "1:254461814423:web:61df32e6cc1fab5ef0ebd2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();