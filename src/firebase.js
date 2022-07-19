import firebase from "firebase/app";
import "firebase/auth"

export const auth =  firebase.initializeApp({
  apiKey: "AIzaSyCCGyH7K2NIzGTRTFpbH8v6P9cypWwfuk4",
  authDomain: "chats-app-ff482.firebaseapp.com",
  projectId: "chats-app-ff482",
  storageBucket: "chats-app-ff482.appspot.com",
  messagingSenderId: "816588113822",
  appId: "1:816588113822:web:a684ba4bf2b4c54fa3788f"
}).auth();

