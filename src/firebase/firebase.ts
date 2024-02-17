// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArhuvRrs-SkPkN9A4R3PYYF3biempismY",
  authDomain: "mednex-b1528.firebaseapp.com",
  projectId: "mednex-b1528",
  storageBucket: "mednex-b1528.appspot.com",
  messagingSenderId: "745337275556",
  appId: "1:745337275556:web:2a415a50ce5e1fb7119231",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export const hospitalRef = collection(db, "hospital");
export const testRef = collection(db, "test");

// getDocs(hospitalRef).then((snapshot) => {
//   let hospital: {}[] = []
//   snapshot.docs.forEach((doc) => {
//     hospital.push({...doc.data(), id: doc.id})
//   })
//   console.log(hospital[0])
// })
