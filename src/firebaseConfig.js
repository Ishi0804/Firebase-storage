// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBiTHDB2-HlharzIxQGV4SduYDrbrOUuk",
  authDomain: "firestorage-c1516.firebaseapp.com",
  projectId: "firestorage-c1516",
  storageBucket: "firestorage-c1516.firebasestorage.app",
  messagingSenderId: "1046754317898",
  appId: "1:1046754317898:web:656f4e1bd5e6acd8d7b8b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const auth = getAuth(app);