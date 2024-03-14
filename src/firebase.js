import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC6vPi0I5RoSmrUM2qiNXCLnjDgb5_iDO0",
    authDomain: "chat-34d38.firebaseapp.com",
    projectId: "chat-34d38",
    storageBucket: "chat-34d38.appspot.com",
    messagingSenderId: "678128901600",
    appId: "1:678128901600:web:df089259e6f8e99772df85",
    measurementId: "G-1HJ7SSPYXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)