// firebase/auth.js
import { createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,} from "firebase/auth";

  import { auth } from "./firebase";

  const GoogleProvider = new GoogleAuthProvider();

  export const registerUser = async(email,password)=> {
    try {
      const usercredential = await createUserWithEmailAndPassword(auth,email,password);
      return usercredential.user;
    }catch(error){
      throw error;
    }
  };

  export const loginUser = async(email, password)=>{
    try {
      const usercredential = await signInWithEmailAndPassword(auth,email,password);
      return usercredential.user;
    }catch(error){
      throw error;
    }
  };


  export const loginWithGoogle = async()=>{
     try {
      const usercredential = await signInWithPopup(auth,GoogleProvider);
      return usercredential.user;
    }catch(error){
      throw error;
    }
  };

  export const logoutUser = async() =>{
    await signOut(auth);
  };
