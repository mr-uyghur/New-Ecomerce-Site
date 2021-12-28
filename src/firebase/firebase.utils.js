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


// ------------------------------------------------------------------------------------------------------------------------------------------------
//this block of code is used for creating a new user profile
//the function below is gonna qry data from the user object we get back from firebase's databse
export const createUserProfileDocument = async (userAuth, additionalData) => {
  //code below is for if the user isn't signed in 
  //then we will not to anything with this function
  if (!userAuth) return
  //code below will qry user unique id from firebase and 
  //returns user reference
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  //code below is for if snapShot(user id) don't exist in the database
  //we will create a piece of data for that user
  //we will create it using the userRef
  if(!snapShot.exists){
    //get displayName and use email from the userAuth object
    const {displayName, email} = userAuth
    const createdAt = new Date() //this code records when this data is created
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    }catch(err){
      console.log('Error creating user: ' + err.message)
    }
  }
  return userRef
}
// ------------------------------------------------------------------------------------------------------------------------------------------------

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google auth utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
