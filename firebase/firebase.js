// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsR1LHaadRjqnpsjGQm7oHRqgOcjqFedU",
  authDomain: "arqos-81bac.firebaseapp.com",
  projectId: "arqos-81bac",
  storageBucket: "arqos-81bac.firebasestorage.app",
  messagingSenderId: "327537801751",
  appId: "1:327537801751:web:dbe12f93f175778b347a52",
  measurementId: "G-TW8JW1JJ5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exporta la instancia de autenticación
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export default app;