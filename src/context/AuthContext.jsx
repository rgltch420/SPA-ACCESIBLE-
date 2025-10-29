import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Login con email
  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

  // Registro con email
  const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  // Login con Google
  const loginWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider());

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, login, register, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
