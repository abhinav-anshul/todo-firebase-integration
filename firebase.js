import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCfNRxlgEGvmQHsoSTlQJjwuHExmKEvqrM",
  authDomain: "todo-41961.firebaseapp.com",
  projectId: "todo-41961",
  storageBucket: "todo-41961.appspot.com",
  messagingSenderId: "618258027233",
  appId: "1:618258027233:web:b77e1d7a20b8e3206a5da0",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
