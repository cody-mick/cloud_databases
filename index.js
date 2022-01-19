// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6S9JeKOaYiWiuBpLWwDUTLn9S2uz2BBs",
  authDomain: "grower-codes.firebaseapp.com",
  projectId: "grower-codes",
  storageBucket: "grower-codes.appspot.com",
  messagingSenderId: "669430447435",
  appId: "1:669430447435:web:0a7e9cb1af9d1a4a40fcce",
  measurementId: "G-VRFNH1Z5QY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app)

// Detect auth state
onAuthStateChanged(auth, user => {
  if (user != null) {
    console.log('logged in!');
  } else {
    console.log('no user!');
  }
});