// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDoc, getDocs, doc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDD4TkFUt0iDRo8rb1VYhGjxNYCAyS8HeA",
    authDomain: "seawavebackend.firebaseapp.com",
    projectId: "seawavebackend",
    storageBucket: "seawavebackend.appspot.com",
    messagingSenderId: "570751352895",
    appId: "1:570751352895:web:c732613a1365070a97f88a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const storage = getStorage(app);

export { db, auth, googleProvider, signInWithPopup, collection, getDoc, storage, getDocs, addDoc, doc };












// default allowance

///////////////////////////////////////////////////////////
// firebase.js
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import { getAuth, signInAnonymously, signOut } from 'firebase/auth';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDD4TkFUt0iDRo8rb1VYhGjxNYCAyS8HeA",
//     authDomain: "seawavebackend.firebaseapp.com",
//     projectId: "seawavebackend",
//     storageBucket: "seawavebackend.appspot.com",
//     messagingSenderId: "570751352895",
//     appId: "1:570751352895:web:c732613a1365070a97f88a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firestore
// const db = getFirestore(app);
// const auth = getAuth(app);

// export { db, auth, signInAnonymously, signOut, collection, addDoc };

