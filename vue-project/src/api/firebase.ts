// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: any = {
  apiKey: "AIzaSyBDevPI9maQg7zZPO4rUDHj7ZMENqdw3vE",
  authDomain: "closetsnap-822e7.firebaseapp.com",
  projectId: "closetsnap-822e7",
  storageBucket: "closetsnap-822e7.appspot.com",
  messagingSenderId: "604567787747",
  appId: "1:604567787747:web:173093122cebf15280cdd6"
};

// Initialize Firebase

const app: any = initializeApp(firebaseConfig);
const auth: any = getAuth(app);
const storage: any = getStorage(app);

export {
  app,
  auth,
  storage,
  
}