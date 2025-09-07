// firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANnBhw97WvxTMCniFgsclxa5vwi-wnxvQ",
  authDomain: "vsswebapp-12401.firebaseapp.com",
  projectId: "vsswebapp-12401",
  storageBucket: "vsswebapp-12401.firebasestorage.app",
  messagingSenderId: "616357081739",
  appId: "1:616357081739:web:801e0e51154fdee1acda8e",
  measurementId: "G-1NYNBC0HRB"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
