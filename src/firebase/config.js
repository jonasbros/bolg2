import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyASeAQpbJJjvYrMIT8OPKjZdLynlnS5pFo",
    authDomain: "bolg-7aaec.firebaseapp.com",
    projectId: "bolg-7aaec",
    storageBucket: "bolg-7aaec.appspot.com",
    messagingSenderId: "1007171942822",
    appId: "1:1007171942822:web:f1bf2266db2bb5644cb767"
};

firebase.initializeApp(firebaseConfig);

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { googleProvider, firebase }