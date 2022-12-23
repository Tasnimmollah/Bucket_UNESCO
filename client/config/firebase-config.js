// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH_iCV59p_WE_WEyumRqSQF9YIlMqqAws",
  authDomain: "stackathonproject.firebaseapp.com",
  projectId: "stackathonproject",
  storageBucket: "stackathonproject.appspot.com",
  messagingSenderId: "1053312082774",
  appId: "1:1053312082774:web:efe1b981c7babee9be6cf7",
  measurementId: "G-MMV241NQBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app

