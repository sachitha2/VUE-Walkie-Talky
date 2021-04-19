import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = { 
    apiKey: "AIzaSyB8tv5gAvkL0E85_IaBqSdabPadYm1d_N0",
    authDomain: "infini-walki-talki.firebaseapp.com",
    projectId: "infini-walki-talki",
    storageBucket: "infini-walki-talki.appspot.com",
    messagingSenderId: "904903568110",
    appId: "1:904903568110:web:4f4f80767eee51bffaa1ff",
    measurementId: "G-3KBNF2J1Z9"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();