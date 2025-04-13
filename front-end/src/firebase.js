// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyD5ZM1aO6mZVl0rom_l3-UdTgUSKAu-ZgQ",
    authDomain: "vlu-chatbot-5deaf.firebaseapp.com",
    projectId: "vlu-chatbot-5deaf",
    storageBucket: "vlu-chatbot-5deaf.firebasestorage.app",
    messagingSenderId: "283109411846",
    appId: "1:283109411846:web:442f8551e3e785b88ec787",
    measurementId: "G-0K4K2W3X7N"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'vi'; // 'vi' là mã ngôn ngữ tiếng Việt

const provider = new GoogleAuthProvider();

export { auth, provider };
