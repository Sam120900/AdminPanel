
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyB55nB6biTGAYkXTuqdT22XHdk5M5z6yLA",
    authDomain: "e4s-lyc-web-f1383.firebaseapp.com",
    projectId: "e4s-lyc-web-f1383",
    storageBucket: "e4s-lyc-web-f1383.appspot.com",
    messagingSenderId: "1079123934925",
    appId: "1:1079123934925:web:d05bc5ae532b4790187384",
    measurementId: "G-DDPZP04QRM"
  };
  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;