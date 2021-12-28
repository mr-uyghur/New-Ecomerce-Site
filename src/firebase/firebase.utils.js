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

//the function below is gonna qry data from the user object we get back from firebase's databse
export const createUserProfileDocument = async (userAuth, additionalData) => {
  //code below is for if the user isn't signed in 
  //then we will not to anything with this function
  if (!userAuth) return
  
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google auth utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
