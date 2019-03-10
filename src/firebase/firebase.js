import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCZc9jnVFMvqoQgkJRCttifzBAuXze2cbc",
    authDomain: "simple-notebook-b26cd.firebaseapp.com",
    databaseURL: "https://simple-notebook-b26cd.firebaseio.com",
    projectId: "simple-notebook-b26cd",
    storageBucket: "simple-notebook-b26cd.appspot.com",
    messagingSenderId: "889312682085"
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};