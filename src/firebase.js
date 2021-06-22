import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCRxtZrUupUN4ijaEe98pK7801dZ6CF8yU",
  authDomain: "react-firebase-chat-f570f.firebaseapp.com",
  projectId: "react-firebase-chat-f570f",
  storageBucket: "react-firebase-chat-f570f.appspot.com",
  messagingSenderId: "810675849748",
  appId: "1:810675849748:web:fdd56cf72b310e77e4b501",
  measurementId: "G-VQLLXWR18H",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
