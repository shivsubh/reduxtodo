import firebase from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBYsrYoFjX_u8udlubAPJFtPwkmO_33uF0",
  authDomain: "todo-list-7c0c7.firebaseapp.com",
  projectId: "todo-list-7c0c7",
  storageBucket: "todo-list-7c0c7.appspot.com",
  messagingSenderId: "816118885014",
  appId: "1:816118885014:web:6acb9e141c17c7836ef0b7",
  measurementId: "G-Z4NZVMK9LX",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;
