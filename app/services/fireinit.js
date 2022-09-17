// This is `services/fireinit.js`

import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

var config = {
    apiKey: "AIzaSyDGfvHWcxqx7PDo_5IE6bsRhUqDB9nXRoo",
    authDomain: "elaborateboba.firebaseapp.com",
    databaseURL: "https://elaborateboba-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "elaborateboba",
    storageBucket: "elaborateboba.appspot.com",
    messagingSenderId: "432760531737",
    appId: "1:432760531737:web:d0e9ce1de972881541b388",
    measurementId: "G-6Q1J1WGMJ5"
}

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase