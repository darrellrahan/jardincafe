import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQan2OFaHWF5KxTQuwwNd61hxNtamVuQc",
  authDomain: "jardin-cafe.firebaseapp.com",
  projectId: "jardin-cafe",
  storageBucket: "jardin-cafe.appspot.com",
  messagingSenderId: "288546906995",
  appId: "1:288546906995:web:9a5f829461724c8035db06",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function sendReservation(
  people: string,
  date: string,
  time: string,
  area: string
) {
  try {
    await addDoc(collection(db, "reservation"), {
      people: people,
      date: date,
      time: time,
      area: area,
    });
  } catch (e) {
    alert(e);
  }
}

export { sendReservation };
