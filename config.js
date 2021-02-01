import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBiC8lNYdBv0sgB-3BVxhX7yBlvKEEQ-8U",
    authDomain: "book-santa-app-a8e97.firebaseapp.com",
    projectId: "book-santa-app-a8e97",
    storageBucket: "book-santa-app-a8e97.appspot.com",
    messagingSenderId: "514401026294",
    appId: "1:514401026294:web:a6d3d65935855b37102cd7"
  };
  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;

