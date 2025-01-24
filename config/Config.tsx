// config/Config.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcfbBKXIAlF0EJpo_4v2c1YNVLhB8g32A",
  authDomain: "yp-prueba.firebaseapp.com",
  projectId: "yp-prueba",
  storageBucket: "yp-prueba.appspot.com", 
  messagingSenderId: "170010601059",
  appId: "1:170010601059:web:202237aceb4e37cee33a56",
  measurementId: "G-785YBQ4PS9",
  databaseURL: "https://yp-prueba.firebaseio.com",  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Firestore Database
export const db = getFirestore(app);

// Uncomment the next line if you plan to use the Realtime Database
// export const realTimeDb = getDatabase(app);

