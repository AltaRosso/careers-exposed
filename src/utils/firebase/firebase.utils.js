
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBCO74i40rtMP6A0nP6Q2Jzr5GUjmsU9Hk",
  authDomain: "careers-exposed.firebaseapp.com",
  projectId: "careers-exposed",
  storageBucket: "careers-exposed.appspot.com",
  messagingSenderId: "990962305594",
  appId: "1:990962305594:web:d93b10bbfe718f1cb88303",
  measurementId: "G-LJES9EP66Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
