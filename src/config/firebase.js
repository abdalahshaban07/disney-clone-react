import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlyUDQ_iBIpkaQAZZ0IjfZKQ5JpXo1ROs",
  authDomain: "disney-clone-c5c1b.firebaseapp.com",
  projectId: "disney-clone-c5c1b",
  storageBucket: "disney-clone-c5c1b.appspot.com",
  messagingSenderId: "817652726230",
  appId: "1:817652726230:web:2c075a4e59737df3d4cc77",
  measurementId: "G-CZZJK61X2P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });
