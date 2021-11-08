import * as firebase from "firebase";
import "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_R57r9iWb4BgC8Bk_v9GCs6HGDQUUS5U",
  authDomain: "signup-form-945c1.firebaseapp.com",
  databaseURL: "https://signup-form-945c1.firebaseio.com",
  projectId: "signup-form-945c1",
  storageBucket: "signup-form-945c1.appspot.com",
  messagingSenderId: "351399336614",
  appId: "1:351399336614:web:83351a0159dcc2774f3267",
  measurementId: "G-3BN6Q4YBLL",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
