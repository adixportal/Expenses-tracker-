// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyByPXnGW6t4Q1seDNdjoKmpcdoS8uSrn1o",
  authDomain: "expense-tracker-b2038.firebaseapp.com",
  projectId: "expense-tracker-b2038",
  storageBucket: "expense-tracker-b2038.appspot.com",
  messagingSenderId: "86028936684",
  appId: "1:86028936684:web:4907eebe3f4dd668fe0cc9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);