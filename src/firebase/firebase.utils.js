//firebase utility library used for user authentication

import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


const config = {
  apiKey: "AIzaSyDBPAtfmyEfWscFkpEGHVx4zQc8A-OW--s",
  authDomain: "ecomerce-react-2bbc8.firebaseapp.com",
  projectId: "ecomerce-react-2bbc8",
  storageBucket: "ecomerce-react-2bbc8.appspot.com",
  messagingSenderId: "998812900214",
  appId: "1:998812900214:web:5d00437ff477c7402ff857",
  measurementId: "G-G2NVQ0RKLV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google auth utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
