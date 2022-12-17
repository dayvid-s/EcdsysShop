import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getStorage } from 'firebase/storage';
export const firebaseConfig = {
  apiKey: "AIzaSyDndAT0o-Q5oW8mujaVZSk8FGP8GJdw9Xs",
  authDomain: "ecdysshop.firebaseapp.com",
  projectId: "ecdysshop",
  storageBucket: "ecdysshop.appspot.com",
  messagingSenderId: "450020217967",
  appId: "1:450020217967:web:693938e8d4726e4b54699a"
};

const firestoreSettings = {
  useFetchStreams: false
}
let app  
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig, firestoreSettings)
} else {
  app = firebase.app();
}
export {firebase}
export const firestore = app.firestore();
export const auth = firebase.auth();
export const storage = getStorage(app)