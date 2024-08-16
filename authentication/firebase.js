// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATSyLd3WXdUu_CUfT0Oqb5sbAZyk86lJk",
  authDomain: "login-2a330.firebaseapp.com",
  projectId: "login-2a330",
  storageBucket: "login-2a330.appspot.com",
  messagingSenderId: "457288169790",
  appId: "1:457288169790:web:4f21d59c556435323b546f",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
export { auth };
