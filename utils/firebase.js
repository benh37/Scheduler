import firebase from 'firebase/compat/app';
import "firebase/compat/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK-cyojz55a2HUq2lubvaWwnjJdWj-sB0",
  authDomain: "scheduler-b670b.firebaseapp.com",
  databaseURL: "https://scheduler-b670b-default-rtdb.firebaseio.com",
  projectId: "scheduler-b670b",
  storageBucket: "scheduler-b670b.appspot.com",
  messagingSenderId: "884885544980",
  appId: "1:884885544980:web:828ea07ebb339ab8cb0701",
  measurementId: "G-8B93RYM53S"
};

firebase.initializeApp(firebaseConfig);

export { firebase };