import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCC4XKb93HHneE47qI1ij9-AfuKL_OiU2o",
    authDomain: "test-ru-b1e84.firebaseapp.com",
    projectId: "test-ru-b1e84",
    storageBucket: "test-ru-b1e84.appspot.com",
    messagingSenderId: "151627091735",
    appId: "1:151627091735:web:68b6c01faf6d2710d43152"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);