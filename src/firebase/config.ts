import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firebase-auth'


const firebaseConfig = {
  apiKey: "AIzaSyD2vJHT7AS4WrBGg9rJMrxCbTq8HF5eTsQ",
  authDomain: "awesome-shop-28efc.firebaseapp.com",
  projectId: "awesome-shop-28efc",
  storageBucket: "awesome-shop-28efc.appspot.com",
  messagingSenderId: "235949197825",
  appId: "1:235949197825:web:36a726a8ed12aba8100e00"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}
export const auth = firebase.auth()
