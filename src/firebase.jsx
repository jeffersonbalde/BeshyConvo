import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4tg3wexI3ZHDZ6HX6JXy9I_UgHqTfdpY",
  authDomain: "chatweb-70634.firebaseapp.com",
  projectId: "chatweb-70634",
  storageBucket: "chatweb-70634.appspot.com",
  messagingSenderId: "513959241528",
  appId: "1:513959241528:web:4fa73cbd9180ec068383cd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);