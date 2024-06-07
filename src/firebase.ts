import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRGURPXQIZpu8fZXCbH35_8RYtOfze4gE",
  authDomain: "exchangerate-b8cb3.firebaseapp.com",
  projectId: "exchangerate-b8cb3",
  storageBucket: "exchangerate-b8cb3.appspot.com",
  messagingSenderId: "1069526097954",
  appId: "1:1069526097954:web:4e216a991ec71518d7ea7b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
