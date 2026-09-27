// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCblZ_yXyx-fTc8sOO8LgnJuPS5Rj_dEas",
  authDomain: "movie-app-7c726.firebaseapp.com",
  projectId: "movie-app-7c726",
  storageBucket: "movie-app-7c726.firebasestorage.app",
  messagingSenderId: "690968268753",
  appId: "1:690968268753:web:14a20395e53372f55b5af0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
