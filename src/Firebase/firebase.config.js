
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
};
// const firebaseConfig = {
//     apiKey: "AIzaSyCFEAeRzfzjdR6suGsMP5seUdEKHGxxAXM",
//     authDomain: "portfolio-b7fcc.firebaseapp.com",
//     projectId: "portfolio-b7fcc",
//     storageBucket: "portfolio-b7fcc.appspot.com",
//     messagingSenderId: "665902183330",
//     appId: "1:665902183330:web:5405ba98782edb1097b8fb"
//   };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;