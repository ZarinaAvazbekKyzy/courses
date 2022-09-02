import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzhc1qkxflkOvVawLqFcLv3qC_uK70pRc",
  authDomain: "courses-78d87.firebaseapp.com",
  projectId: "courses-78d87",
  storageBucket: "courses-78d87.appspot.com",
  messagingSenderId: "527585531458",
  appId: "1:527585531458:web:ce2146161bf23fcfed7fdb",
  measurementId: "G-EHE1KYNPTR",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
