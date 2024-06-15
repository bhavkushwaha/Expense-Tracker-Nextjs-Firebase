// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.YOUR_API_KEY,
  authDomain: process.env.YOUR_AUTH_DOMAIN,
  projectId: process.env.YOUR_PROJECT_ID,
  storageBucket: process.env.YOUR_STORAGE_BUCKET,
  messagingSenderId: process.env.YOU_MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
