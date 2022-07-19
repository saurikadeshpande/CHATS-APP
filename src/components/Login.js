import React from "react";
import {GoogleOutlined , FacebookOutlined} from "@ant-design/icons"
import   "firebase/app"
import { auth } from "../firebase";
import firebase from "firebase/app"
const Login=() => {
   return (
    <div id="login-page">
        <div id="logi-card">
            <h2> Welcome to Chats </h2>
            <div className="login-button google" onClick={() =>{auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider)}}>
              <GoogleOutlined />
              Sign In with google
        
            </div>
          
        </div>
    </div>
   )
}
export default Login