import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCzdYGnqISKshBahoQnGUl00A_BQX-sg_w",
    authDomain: "pokecord-6a5b8.firebaseapp.com",
    projectId: "pokecord-6a5b8",
    storageBucket: "pokecord-6a5b8.appspot.com",
    messagingSenderId: "1001071527727",
    appId: "1:1001071527727:web:01a12b712af6b8b64f83da"
};


// Initialize firebase app
const app = firebase.initializeApp(firebaseConfig);


const db = app.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};