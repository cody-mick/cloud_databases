import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6S9JeKOaYiWiuBpLWwDUTLn9S2uz2BBs",
  authDomain: "grower-codes.firebaseapp.com",
  projectId: "grower-codes",
  storageBucket: "grower-codes.appspot.com",
  messagingSenderId: "669430447435",
  appId: "1:669430447435:web:0a7e9cb1af9d1a4a40fcce",
  measurementId: "G-VRFNH1Z5QY",
};

const app = initializeApp(firebaseConfig);

console.log("Hello, Firestore!")

var growerNameDisplay = document.querySelector(".grower-name");
var growerCodeDisplay = document.querySelector(".grower-code");
var editGrowerBtn = document.getElementById("edit");
var deleteGrowerBtn = document.getElementById("delete");
var addGrowerBtn = document.getElementById("add");
