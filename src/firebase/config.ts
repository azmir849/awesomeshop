import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firebase-auth'


const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId

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
