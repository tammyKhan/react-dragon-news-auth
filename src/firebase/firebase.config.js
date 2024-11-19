// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJYMN0kB9wbd_FSwqbzHH9QsBhaJmtoDY",
  authDomain: "dragon-news-73068.firebaseapp.com",
  projectId: "dragon-news-73068",
  storageBucket: "dragon-news-73068.firebasestorage.app",
  messagingSenderId: "617395754846",
  appId: "1:617395754846:web:bf1696b125b2656a56a1cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app