
// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAuth, } from "firebase/auth";
// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core and will be removed in a future release']);
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import { getReactNativePersistence } from 'firebase/auth/react-native';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';
import {AsyncStorage } from '@react-native-async-storage/async-storage';
// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDndAT0o-Q5oW8mujaVZSk8FGP8GJdw9Xs",
  authDomain: "ecdysshop.firebaseapp.com",
  projectId: "ecdysshop",
  storageBucket: "ecdysshop.appspot.com",
  messagingSenderId: "450020217967",
  appId: "1:450020217967:web:693938e8d4726e4b54699a"
};


// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// export const auth = initializeAuth(firebaseConfig, {
//   persistence: getReactNativePersistence(AsyncStorage),
//   });
  let app
  
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

// const db = app.firestore();
export const auth = firebase.auth();