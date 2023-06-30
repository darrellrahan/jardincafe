import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQan2OFaHWF5KxTQuwwNd61hxNtamVuQc",
  authDomain: "jardin-cafe.firebaseapp.com",
  projectId: "jardin-cafe",
  storageBucket: "jardin-cafe.appspot.com",
  messagingSenderId: "288546906995",
  appId: "1:288546906995:web:9a5f829461724c8035db06",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { auth, db };
