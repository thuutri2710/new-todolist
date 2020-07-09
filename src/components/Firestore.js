import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2_7US9uNuX-AOOIRH0pawawyBPRtWof8",
  authDomain: "todolist-e40d2.firebaseapp.com",
  databaseURL: "https://todolist-e40d2.firebaseio.com",
  projectId: "todolist-e40d2",
  storageBucket: "todolist-e40d2.appspot.com",
  messagingSenderId: "1032037485456",
  appId: "1:1032037485456:web:5248b02982cffe00d44115",
  measurementId: "G-239X0X7M3J",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
