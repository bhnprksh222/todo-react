import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBaXhCSGaIS7basRFL0oA-qFRcyFFJNNa0",
    authDomain: "todo-app-react-38e98.firebaseapp.com",
    databaseURL: "https://todo-app-react-38e98.firebaseio.com",
    projectId: "todo-app-react-38e98",
    storageBucket: "todo-app-react-38e98.appspot.com",
    messagingSenderId: "916859544653",
    appId: "1:916859544653:web:6e739f0634faccca1a2804",
    measurementId: "G-VFJ9TY0NT5"
});

const db = firebase.firestore();

export default db;