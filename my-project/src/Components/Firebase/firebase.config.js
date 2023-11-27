// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUs9uAqzD35UQGrCYAaK2xDC-t41hcFsY",
  authDomain: "employ-management-20d5c.firebaseapp.com",
  projectId: "employ-management-20d5c",
  storageBucket: "employ-management-20d5c.appspot.com",
  messagingSenderId: "740871700912",
  appId: "1:740871700912:web:1c14d46977078daaa45675",
  measurementId: "G-7ZBTT8SYLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);