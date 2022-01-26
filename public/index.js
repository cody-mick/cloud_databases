import { initializeApp } from "/firebase/app";
import { doc, setDoc, deleteDoc, collection, query, where, getDoc} from "/firebase/firestore";

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

//TODOs:

function addRecords() {
  // Adding records to the database
  let name = growerNameDisplay.value;
  let code = growerCodeDisplay.value;
}

function retrieveRecords() {
  // Retrieving records from the database
}

function deleteRecords() {
  // Deleting records from the database
}

function editRecords() {
  // Editing a record in the database
}