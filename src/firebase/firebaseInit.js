import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALvGD8S6UwLyf5Tc6pnRChDhW7rF0yFBU",
  authDomain: "vue-firebase-blog-50089.firebaseapp.com",
  projectId: "vue-firebase-blog-50089",
  storageBucket: "vue-firebase-blog-50089.appspot.com",
  messagingSenderId: "219153277654",
  appId: "1:219153277654:web:58e2108e11fa24ef351f77",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
