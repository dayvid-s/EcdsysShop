// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, } from "firebase/auth";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core and will be removed in a future release']);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDndAT0o-Q5oW8mujaVZSk8FGP8GJdw9Xs",
  authDomain: "ecdysshop.firebaseapp.com",
  projectId: "ecdysshop",
  storageBucket: "ecdysshop.appspot.com",
  messagingSenderId: "450020217967",
  appId: "1:450020217967:web:693938e8d4726e4b54699a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
