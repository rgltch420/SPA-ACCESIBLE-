// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Configuración pública de tu Firebase (igual que en backend, pero sin secretos)
const firebaseConfig = {
  apiKey: "AIzaSyCsR1LHaadRjqnpsjGQm7oHRqgOcjqFedU",
  authDomain: "arqos-81bac.firebaseapp.com",
  projectId: "arqos-81bac",
  storageBucket: "arqos-81bac.firebasestorage.app",
  messagingSenderId: "327537801751",
  appId: "1:327537801751:web:dbe12f93f175778b347a52",
  measurementId: "G-TW8JW1JJ5P"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default app;
