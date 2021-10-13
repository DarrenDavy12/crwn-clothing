import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCHZ0NKoHJWPg_wRqJMYVcSL8JlyczBWDg",
    authDomain: "crwn-db-dcdfa.firebaseapp.com",
    projectId: "crwn-db-dcdfa",
    storageBucket: "crwn-db-dcdfa.appspot.com",
    messagingSenderId: "1086578502260",
    appId: "1:1086578502260:web:c5834177ac0b6861697f21",
    measurementId: "G-8Q96MGM3HN"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
