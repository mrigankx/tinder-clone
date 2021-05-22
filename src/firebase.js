import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAWRgNfBVTt-oPeFwvTSBNtkYxgnGwtD0A",
  authDomain: "tinder-clone-ea222.firebaseapp.com",
  projectId: "tinder-clone-ea222",
  storageBucket: "tinder-clone-ea222.appspot.com",
  messagingSenderId: "1067476840045",
  appId: "1:1067476840045:web:abcd04e7fa6489ec729964",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
