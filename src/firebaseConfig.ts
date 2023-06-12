// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR1Q7Qms8ptZud-pjscAfXVdzdtNmnj4Y",
  authDomain: "shoutouts-666fa.firebaseapp.com",
  projectId: "shoutouts-666fa",
  storageBucket: "shoutouts-666fa.appspot.com",
  messagingSenderId: "713423636098",
  appId: "1:713423636098:web:39aa474a53d5a4daa3169b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app);
