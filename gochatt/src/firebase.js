import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyAOvseWPi3llMpm3J_FUcgQcKPXmOLz9jE",
    authDomain: "gochat-c11c0.firebaseapp.com",
    projectId: "gochat-c11c0",
    storageBucket: "gochat-c11c0.appspot.com",
    messagingSenderId: "533684369063",
    appId: "1:533684369063:web:63cc66ead4acffd71f0d82"
  }).auth();
