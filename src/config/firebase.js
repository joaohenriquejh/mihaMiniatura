// Import the functions you need from the SDKs you need
import { deleteApp, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHurSeKOz9SQ30aV7JFDeYP_DP37dXlyk",
  authDomain: "minha-miniatura.firebaseapp.com",
  projectId: "minha-miniatura",
  storageBucket: "minha-miniatura.appspot.com",
  messagingSenderId: "1056837700661",
  appId: "1:1056837700661:web:8a0ccbd218bc2f1fe9b57c"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const storage = getStorage(firebase);
export default firebase;