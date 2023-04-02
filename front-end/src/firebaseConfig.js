import { initializeApp } from "firebase/app";
import "firebase/auth";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
export const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyCGcEodHd_0443ACRG9ZcrPmoB68tS9srQ",
  authDomain: "hackpsu2023.firebaseapp.com",
  projectId: "hackpsu2023",
  databaseURL: "https://hackpsu2023-default-rtdb.firebaseio.com/",
  storageBucket: "hackpsu2023.appspot.com",
  messagingSenderId: "193262561637",
  appId: "1:193262561637:web:435239f90b61ddb1ca198c",
};

export const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { auth, db };
